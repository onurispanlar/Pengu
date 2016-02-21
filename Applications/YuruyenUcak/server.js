var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    router = express.Router(),
    userSchema = require("./src/model/user"),
    articleController = require("./src/controller/articleController");
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  "extended": false
}));

router.get("/", function(req, res) {
  res.json({
    "error": false,
    "message": "Hello World"
  });
});

router.route("/users")
  .get(function(req, res) {
    var response = {};
    userSchema.find({}, function(err, data) {
      // Mongo command to fetch all data from collection.
      if (err) {
        response = {
          "error": true,
          "message": "Error fetching data"
        };
      } else {
        response = {
          "error": false,
          "message": data
        };
      }
      res.json(response);
    });
  })
  .post(function(req, res) {
    var db = new userSchema();
    var response = {};
    // fetch email and password from REST request.
    // Add strict validation when you use this in Production.
    db.userEmail = req.body.email;
    // Hash the password using SHA1 algorithm.
    db.userPassword = req.body.password;
    db.save(function(err) {
      // save() will run insert() command of MongoDB.
      // it will add new data in collection.
      if (err) {
        response = {
          "error": true,
          "message": "Error adding data"
        };
      } else {
        response = {
          "error": false,
          "message": "Data added"
        };
      }
      res.json(response);
    });
  });

router.route("/users/:id")
  .get(function(req, res) {
    var response = {};
    userSchema.findById(req.params.id, function(err, data) {
      // This will run Mongo Query to fetch data based on ID.
      if (err) {
        response = {
          "error": true,
          "message": "Error fetching data"
        };
      } else {
        response = {
          "error": false,
          "message": data
        };
      }
      res.json(response);
    });
  }).put(function(req, res) {
    var response = {};
    // first find out record exists or not
    // if it does then update the record
    userSchema.findById(req.params.id, function(err, data) {
      if (err) {
        response = {
          "error": true,
          "message": "Error fetching data"
        };
      } else {
        // we got data from Mongo.
        // change it accordingly.
        if (req.body.userEmail !== undefined) {
          // case where email needs to be updated.
          data.userEmail = req.body.userEmail;
        }
        if (req.body.userPassword !== undefined) {
          // case where password needs to be updated
          data.userPassword = req.body.userPassword;
        }
        // save the data
        data.save(function(err) {
          if (err) {
            response = {
              "error": true,
              "message": "Error updating data"
            };
          } else {
            response = {
              "error": false,
              "message": "Data is updated for " + req.params.id
            };
          }
          res.json(response);
        })
      }
    });
  })
  .delete(function(req, res) {
    var response = {};
    // find the data
    userSchema.findById(req.params.id, function(err, data) {
      if (err) {
        response = {
          "error": true,
          "message": "Error fetching data"
        };
      } else {
        // data exists, remove it.
        userSchema.remove({
          _id: req.params.id
        }, function(err) {
          if (err) {
            response = {
              "error": true,
              "message": "Error deleting data"
            };
          } else {
            response = {
              "error": true,
              "message": "Data associated with " + req.params.id + "is deleted"
            };
          }
          res.json(response);
        });
      }
    });
  });
  

    router.route("/articles")
        .get(function(req, res) {
          res.json({
              "error": true,
              "message": "Please specify identifier for articles"
            });
        })
    .post(function(req, res) {
        userController.getUserByUsername(req.body.username,
            function getUsernameSuccessCallback(user) {
                var params = {};
                
                params.title = req.body.title;
                params.author_id = user.id;
                params.pulished_date = req.body.pulished_date;
                params.created_date = req.body.created_date;
                params.updated_date = req.body.updated_date;
                params.page_count = req.body.page_count;
                params.language = req.body.language;
                params.tags = req.body.tags;
                params.content = req.body.content;
                
                articleController.createArticle(params,
                    function createArticleSuccessCallback() {
                        res.json({
                            "error": false,
                            "message": "Article added successfully"
                        });
                    },
                    function createArticleFailureCallback(error) {
                        res.json({
                            "error": true,
                            "message": "Failed to create article"
                        });
                    });
                
            },
        function getUsernameFailureCallback() {
            res.json({
                "error": true,
                "message": "Failed to fetch given username"
            });
        });
    });

    router.route("/articles/:id")
        .get(function(req, res) {
            articleController.getArticleById(req.params.id,
                function getArticleByIdSuccessCallback(data) {
                    res.json({
                      "error": false,
                      "message": data
                    });
                },
                function getArticleByIdFailureCallback() {
                    res.json({
                        "error": true,
                        "message": "Failed to fetch given article"
                    });
                });
        })
        .put(function(req, res) {
            var params = {};
            
            params.title = req.body.title;
            params.author_id = params.author_id;
            params.pulished_date = req.body.pulished_date;
            params.created_date = req.body.created_date;
            params.updated_date = req.body.updated_date;
            params.page_count = req.body.page_count;
            params.language = req.body.language;
            params.tags = req.body.tags;
            params.content = req.body.content;
            
            articleController.updateArticle(
                params,
                function updateArticleSuccessCallback(data) {
                    res.json({
                      "error": false,
                      "message": "Data is updated for " + req.params.id
                    });
                }, 
                function updateArticleFailureCallback(error) {
                    res.json({
                      "error": true,
                      "message": "Failed to update data"
                    });
                });
    })
    .delete(function(req, res) {
        articleController.deleteArticle(req.params.id,
            function deleteArticleSuccessCallback(response) {
                res.json(response);
            },
            function deleteArticleFailureCallback(response) {
                res.json(response);
            });
    });

router.route("/addBook")
  .post(function(req, res) {
    bookCtrl.addNewBook(req.body, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  });

router.route("/books/:bookId")
  .get(function(req, res) {
    bookCtrl.getBook(req.params.username, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  })
  .put(function(req, res) {
    bookCtrl.update(req.body, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  });

app.use('/', router);

app.listen(3000);
console.log("Listening to PORT 3000");
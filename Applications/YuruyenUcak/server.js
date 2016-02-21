var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    router = express.Router(),
    userCtrl = require("./src/controller/userController"),
    articleController = require("./src/controller/articleController");
    bookCtrl = require("./src/controller/bookController");
  
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

router.route("/addUser")
  .post(function(req, res) {
    userCtrl.addNewUser(req.body, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  });

router.route("/login")
  .put(function(req, res) {
    userCtrl.requestSessionId(req.body.username, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  });

router.route("/users")
  .get(function(req, res) {
    userCtrl.getUserList(function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  });

router.route("/users/:username")
  .get(function(req, res) {
    userCtrl.getUser(req.params.username, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  })
  .put(function(req, res) {
    userCtrl.updateUser(req.params.username, req.body, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  })
  .delete(function(req, res) {
    userCtrl.deleteUser(req.params.username, function(response) {
        res.json("user deleted successfully");
    }, function(err) {
        res.json("database error");
    });
  });

router.route("/logout")
  .put(function(req, res) {
    userCtrl.removeSessionId(req.body.username, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
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
    var params = {};

    userController.getUserByUsername(req.body.username,
        function getUsernameSuccessCallback(user) {
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

router.route("/books")
  .get(function(req, res) {
    bookCtrl.getBookList(function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
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
    bookCtrl.getBook(req.params.bookId, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  })
  .put(function(req, res) {
    bookCtrl.update(req.params.bookId, req.body, function(response) {
        res.json(response);
    }, function(err) {
        res.json("database error");
    });
  });

app.use('/', router);

app.listen(3000);
console.log("Listening to PORT 3000");
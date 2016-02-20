var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  router = express.Router()
  userCtrl = require("./src/controller/userController");

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
    userCtrl.requestSeesionId(req.body.username, function(response) {
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
    userCtrl.updateUser(req.body, function(response) {
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

app.use('/', router);

app.listen(3000);
console.log("Listening to PORT 3000");
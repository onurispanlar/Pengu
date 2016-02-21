var crypto = require("crypto-js"),
  userSchema = require("../model/userModel"),
  sesCtrl = require("../controller/sessionController");
  
exports.addNewUser = function(params, successCallback, failureCallback) {
    var db = new userSchema();

    db.username = params.username;
    db.userEmail = params.email;
    // Hash the password using SHA1 algorithm.
    db.userPassword = crypto.HmacSHA1(params.password, "Key");
    
    db.save(function(err, data) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            successCallback(data);
        }
    });
};
  
exports.requestSessionId = function(username, successCallback, failureCallback) {
    userSchema.findOne({ username: username }, function (err, db) {
        sessionCtrl.createSessionId(function (sessionId) {
            db.sessionId = sessionId;
            db.save(function(err, data) {
                if (err) {
                    console.log(err);
                    failureCallback(err);
                } else {
                    successCallback(sessionId);
                }
            });
        });
    });
};

exports.getUserList = function(successCallback, failureCallback) {
    userSchema.find({}, function(err, data) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            successCallback(data);
        }
    });
};

exports.getUser = function(username, successCallback, failureCallback) {
    userSchema.findOne({ username: username }, function(err, data) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            successCallback(data);
        }
    });
};

exports.updateUser = function(username, params, successCallback, failureCallback) {
    userSchema.findOne({ username: username }, function(err, db) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            if (params.email !== undefined) {
                db.email = params.email;
            }
            if (params.password !== undefined) {
                db.password = params.password;
            }
            if (params.username !== undefined) {
                db.username = params.username;
            }
            db.save(function(err, data) {
                if (err) {
                    console.log(err);
                    failureCallback(err);
                } else {
                    successCallback(data);
                }
            });
        }
    });
};

exports.removeUser = function(username, successCallback, failureCallback) {
    userSchema.findOne({ username: username }, function(err, db) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            db.remove({ username: username }, function(err) {
                if (err) {
                    console.log(err);
                    failureCallback(err);
                } else {
                    successCallback();
                }
            });
        }
    });
};
  
exports.removeSessionId = function(username, successCallback, failureCallback) {
    userSchema.findOne({ username: req.body.username }, function (err, db) {
        db.sessionId = "";
        db.save(function(err, data) {
            if (err) {
                console.log(err);
                failureCallback(err);
            } else {
                successCallback(data);
            }
        });
    });
};
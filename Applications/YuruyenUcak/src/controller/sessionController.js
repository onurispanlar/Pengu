var userSchema = require("../model/userModel");

function isSessionIdAvailable (sesId, successCallback, failureCallback) {
    userSchema.find({sessionId: sesId}, function(err, data) {
        if (err) {
            failureCallback();
        } else {
            if (data.length !== 0) {
                failureCallback();
            } else {
                successCallback();
            }
        }
    });
}

exports.createSessionId = function(successCallback) {
    var sessionId = Math.random();
    isSessionIdAvailable(sessionId, function(){
        successCallback(sessionId);
    }, function() {
        exports.createSessionId();
    });
};



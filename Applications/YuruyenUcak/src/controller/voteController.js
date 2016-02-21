var voteSchema = require("../model/voteModel");

exports.getVoteById = function(id, successCallback, failureCallback) {
    voteSchema.findById(
        id,
        function(err, data) {
            var response;
            if (err) {
                failureCallback(err);
            } else {
                successCallback(data);
            }
        }
    );
};

// TODO: Will be implemented by using where query
exports.getVoteBy = function(credentialMap, successCallback, failureCallback) {
    voteSchema.findById(
        id,
        function(err, data) {
            var response;
            if (err) {
                failureCallback(err);
            } else {
                successCallback(data);
            }
        }
    );
};

exports.createVote = function(params, successCallback, failureCallback) {
    var vote = new voteSchema();
    
    vote.voterId = params.voterId;
    vote.createdDate = params.createdDate;
    vote.updatedDate = params.updatedDate;
    vote.bookId = params.bookId;
    vote.articleId = params.articleId;
    
    vote.save(
        function(err) {
            var response;
            if (err) {
                failureCallback(err);
            } else {
                successCallback(data);
            }
        }
    );
};

exports.deleteVote = function(id, successCallback, failureCallback) {
    voteSchema.findById(
        id,
        function(err, data) {
            var response;
            if (err) {
                response = {
                    "error": true,
                    "message": "Error fetching data"
                };
                failureCallback(response);
            } else {
            // data exists, remove it.
            voteSchema.remove({
                _id: id
            },
            function(err) {
                if (err) {
                    response = {
                        "error": true,
                        "message": "Error deleting data"
                    };
                    failureCallback(response);
                } else {
                    response = {
                        "error": false,
                        "message": "Data associated with " + id + "is deleted"
                    };
                    successCallback(response);
                }
            });
        }
    });
};
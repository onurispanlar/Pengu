var bookSchema = require("../model/bookModel");

exports.getBookList = function(successCallback, failureCallback) {
    bookSchema.find({}, function(err, data) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            successCallback(data);
        }
    });
};

exports.addNewBook = function(params, successCallback, failureCallback) {
    var db = new bookSchema();

    db.title = params.title;
    db.authorId = params.userId;
    db.updatedDate = Date.now();
    db.language = params.language;
    db.tags = params.tags;
    db.content = params.content;
    db.publisherId = params.publisherId;
    
    db.save(function(err, data) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            successCallback(data);
        }
    });
};
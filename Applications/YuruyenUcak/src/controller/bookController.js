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
    for (i = 0; i < params.articles.length; i++) {
        db.articles[db.articles.length] = params.articles[i];
    }
    db.language = params.language;
    db.tags = params.tags;
    db.publisherId = params.publisherId;
    db.updatedDate = Date.now();
    
    db.save(function(err, data) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            successCallback(data);
        }
    });
};

exports.getBook = function(bookId, successCallback, failureCallback) {
    bookSchema.findOne({ _id: bookId }, function(err, data) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            successCallback(data);
        }
    });
};

exports.update = function(bookId, params, successCallback, failureCallback) {
    var i;
    bookSchema.findOne({ _id: bookId }, function(err, db) {
        if (err) {
            console.log(err);
            failureCallback(err);
        } else {
            if (params.title !== undefined) {
                db.title = params.title;
            }
            for (i = 0; i < params.articles.length; i++) {
                db.articles[db.articles.length] = params.articles[i];
            }
            for (i = 0; i < params.authorId.length; i++) {
                db.authorId[db.authorId.length] = params.authorId[i];
            }
            if (params.language !== undefined) {
                db.language = params.language;
            }
            if (params.publisherId !== undefined) {
                db.publisherId = params.publisherId;
            }
            for (i = 0; i < params.tags.length; i++) {
                db.tags[db.tags.length] = params.tags[i];
            }
            db.updatedDate = Date.now();
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
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
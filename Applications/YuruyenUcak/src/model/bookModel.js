var mongoose = require("mongoose");
mongoose.createConnection('mongodb://localhost:27017/YuruyenUcak');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var bookSchema  = {
    "title" : {type: String, required: true},
    "authorId" : {type: [Number], required: true},
    "articles": [Number],
    "updatedDate": Date,
    "language": String,
    // Publisher Id for companies
    "publisherId": String,
    "tags": [String]
};
// create model if not exists.
module.exports = mongoose.model('bookSchema', bookSchema);
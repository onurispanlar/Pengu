var mongoose = require("mongoose");
mongoose.createConnection('mongodb://localhost:27017/YuruyenUcak');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var bookSchema  = {
    "title" : {type: String, required: true},
    "author_id" : {type: String, required: true},
    "articles": [Number],
    "updated_date": Date,
    "language": String,
    // Publisher Id for companies
    "publisher_id": String,
    "tags": [String],
    "content": [String]
};
// create model if not exists.
module.exports = mongoose.model('bookSchema', bookSchema);

mongoose.disconnect();
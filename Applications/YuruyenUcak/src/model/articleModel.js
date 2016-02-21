var mongoose = require("mongoose");
mongoose.createConnection('mongodb://localhost:27017/YuruyenUcak');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var articleSchema  = {
    "title" : {type: String, required: true},
    "authorId" : {type: String, required: true},
    "publishedDate": Date,
    "createdDate": { type: Date, default: Date.now },
    "updatedDate": Date,
    "pageCount": { type: Number, min: 0 },
    "language": String,
    // Publisher Id for companies
    "publisherId": String,
    "tags": [String],
    "content": [String]
};
// create model if not exists.
module.exports = mongoose.model('articleSchema', articleSchema);

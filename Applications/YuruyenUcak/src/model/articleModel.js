var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/YuruyenUcak');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var articleSchema  = {
    "title" : {type: String, required: true},
    "author_id" : {type: String, required: true},
    "pulished_date": Date,
    "created_date": { type: Date, default: Date.now },
    "updated_date": Date,
    "page_count": { type: Number, min: 18 },
    "language": String,
    // Publisher Id for companies
    "publisher_id": String,
    "tags": [String],
    "content": [String]
};
// create model if not exists.
module.exports = mongoose.model('ArticleSchema', articleSchema);
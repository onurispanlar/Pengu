var mongoose = require("mongoose");
mongoose.createConnection('mongodb://localhost:27017/YuruyenUcak');

var mongoSchema = mongoose.Schema;

var voteSchema  = {
    "authorId" : {type: String, required: true},
    "createdDate": { type: Date, default: Date.now },
    "updatedDate": Date,
    "bookId": String,
    "articleId": String
};

module.exports = mongoose.model('VoteSchema', voteSchema);
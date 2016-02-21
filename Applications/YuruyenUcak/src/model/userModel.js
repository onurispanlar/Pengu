var mongoose = require("mongoose");
mongoose.createConnection('mongodb://localhost:27017/YuruyenUcak');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var userSchema  = {
    "userEmail" : {type: String, required: true},
    "userPassword" : {type: String, required: true},
    "username" : {type: String, required: true},
    "sessionId" : Number
};
// create model if not exists.
module.exports = mongoose.model('userSchema', userSchema);

mongoose.disconnect();
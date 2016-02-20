var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/demoDb');
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
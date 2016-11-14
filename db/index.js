var mongoose = require('mongoose');
mongoose.connect('mongodb://106.14.31.43:27017/jwblog');

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
});

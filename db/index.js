var mongoose = require('mongoose');
mongoose.connect('mongodb://106.14.31.43:27017/bj');
mongoose.Promise = Promise;
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    nickName:{default:'',type:String},
    realName:String,
    gender:{type:Number,default:1},
    birthday:String,
    email:String,
    tel:Number,
    avatar:String,
});
mongoose.model('User',UserSchema);

global.Model = function (modName) {
    return mongoose.model(modName);
};
var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/*注册接口*/
router.post('/reg', function(req, res, next) {
  var user = req.body;
  if(user.username==undefined||user.username=='') {
    return res.send({err:1,msg:'用户不能为空'});
  }
  if(user.password!=user.repassword) {
    return res.send({err:1,msg:'两次密码不一致'});
  }
  if(user.username<=6&&user.password<=6){
    return res.send({err:1,msg:'用户名或密码长度过短'});
  }
    user.password = crypto.createHash('md5').update(user.password.toString()).digest('hex');
    Model('User').create(user).then(function (data) {
      req.session.user = user;
      res.send({err:0,msg:'注册成功',username:data.username,id:data._id})
    }).catch(function (err) {
      res.send({err:1,msg:'注册失败'});
    });
});
/*登录*/
router.post('/login', function(req, res, next) {
  var user = req.body;
  user.password = crypto.createHash('md5').update(user.password.toString()).digest('hex');
  Model('User').findOne(user).then(function (data) {
      req.session.user = user;
      res.send({err:0,msg:'登录成功',username:data.username,id:data._id})
  }).catch(function (err) {
      res.send({err:1,msg:'登录失败'});
  });
});
module.exports = router;

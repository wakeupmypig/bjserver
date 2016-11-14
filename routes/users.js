var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/* GET users listing. */
router.post('/reg', function(req, res, next) {
  var user = req.body;
  console.log(user.password);
  user.password = crypto.createHash('md5').update(user.password.toString()).digest('hex');
  Model('User').create(user).then(function (data) {
    delete user.password;
    req.session.user = user;
    res.send({err:0,msg:'注册成功',user:req.session.user})
  }).catch(function (err) {
    res.send({err:1,msg:'注册失败'});
  });
});
module.exports = router;

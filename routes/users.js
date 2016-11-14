var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/reg', function(req, res, next) {
  var user = req.body;
  Model('User').create(user).then(function (data) {
    res.send({err:0,msg:'注册成功'})
  }).catch(function (err) {
    res.send({err:1,msg:'注册失败'});
  });
});
module.exports = router;

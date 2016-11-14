var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/reg', function(req, res, next) {
  console.log(req.body);
  res.end('1')
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/home/site/wwwroot/views/index.html');
  //res.render('index', { title: 'alex' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('alex');
    //res.send('respond with a resource');
    //change happened
});

module.exports = router;

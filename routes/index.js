var express = require('express');
var router = express.Router();

//const path = require("path");
//const app = express();
//app.set("view engine","pug");
//app.set("views", path.join(__dirname, "views"));

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('/home/site/wwwroot/views/newww_front.html');
    //  res.render('index', { title: 'alex' });
});




module.exports = router;

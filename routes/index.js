var express = require('express');
var router = express.Router();

const path = require("path");
const app = express();
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));

app.post("/create-action", (req, res) => {
  // Do Something in Node here
    console.log("You went" + req.fname);
    res.send("You searched " + req.fname);
    console.log("You searched " + req.fname);
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('/home/site/wwwroot/views/index.html');
    //  res.render('index', { title: 'alex' });
});

module.exports = router;

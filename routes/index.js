var express = require('express');
var router = express.Router();

const path = require("path");
const app = express();
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('/home/site/wwwroot/views/index.html');
    //  res.render('index', { title: 'alex' });
});

app.post("/", (req, res) => {
  // Do Something in Node here
    process.stdout.write("You went");
    res.send("You searched " + req.fname);
    console.log("You searched " + req.fname);
    res.redirect("/");
});

module.exports = router;

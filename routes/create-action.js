var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('melody');
    //res.send('respond with a resource');
});

router.post("/", function(req, res,next){
    // Do Something in Node here
      process.stdout.write("You went");
      res.send("You searched " + req.fname);
      console.log("You searched " + req.fname);
      res.redirect("/");
  });

module.exports = router;

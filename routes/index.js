var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});


router.post('/math/add', function (req, res) {

  //console.log(req);
  console.log(req.body);
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var sum = String(num1+num2);
  console.log(typeof sum, sum);
  res.send(sum);
});

router.post('/math/subtract', function (req, res) {

  //console.log(req);
  console.log(req.body);
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var sum = String(num1-num2);
  console.log(typeof sum, sum);
  res.send(sum);
});

router.post('/math/multiply', function (req, res) {

  //console.log(req);
  console.log(req.body);
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var sum = String(num1*num2);
  console.log(typeof sum, sum);
  res.send(sum);
});

router.post('/math/divide', function (req, res) {

  //console.log(req);
  console.log(req.body);
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var sum = String(num1/num2);
  console.log(typeof sum, sum);
  res.send(sum);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const tagline = "the ultimate app for keeping track of your layouts and readings"
  res.render('index', { tagline: tagline });
});

module.exports = router;

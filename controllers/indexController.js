var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(`/users`)})

router.get('/tarotmeanings', (req, res)=> {
  res.render('tarot_meanings')
})
module.exports = router;

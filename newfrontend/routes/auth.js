var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('auth/auth.html', { title: 'Express' });
});

module.exports = router;

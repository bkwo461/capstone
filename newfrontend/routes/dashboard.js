var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dashboard/dashboard.html');
});

module.exports = router;


var express = require('express');
var router = express.Router();


/* GET Service page. */
router.get('/', function(req, res, next) {
    res.render('service/service.html');
  });

/* GET Solution page. */
router.get('/solution', function(req, res, next) {
  res.render('solution/solution.html');
});

module.exports = router;


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

/* GET Selection page. */
router.get('/selection', function(req, res, next) {
  res.render('selection/selection.html');
});
module.exports = router;


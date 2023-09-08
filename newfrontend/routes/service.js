var express = require('express');
var router = express.Router();

/* GET Solution page. */
router.get('/solution', function(req, res, next) {
  res.render('solution/solution.html');
});

module.exports = router;


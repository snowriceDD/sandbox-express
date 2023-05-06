var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'write' });
});

router.post('/', function(req, res) {
    console.log(req.body);
    res.render('form', { title: 'write' });
})
module.exports = router;

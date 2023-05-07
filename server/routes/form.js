const db = require('../db');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'write' });
});

router.post('/', function(req, res) {
    /** bind */
    db.none('INSERT INTO posts (title, contents) VALUES (${title}, ${contents})', req.body)
    /**SQL injection */
    // db.none(`INSERT INTO posts (title, contents) VALUES ('` + req.body.title + `', '` + req.body.contents + `')`)
    //test', 'test'); DROP TABLE posts;--
    res.redirect('/')
})

module.exports = router;

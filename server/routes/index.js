const db = require('../db');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.any('SELECT id, title FROM posts')
    .then((data) => {
      console.log(data)
      res.render('index', { title: 'dcinside', data: data})
    })
    
  // res.render('index', { title: 'dcinside' });
});

router.get('/posts/:id', function(req, res) {
  db.one('SELECT title, id, contents FROM posts WHERE id = $1', req.params.id)
    .then((data) => {
      res.render('contents', { data: data })
    })
})


module.exports = router;


// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })
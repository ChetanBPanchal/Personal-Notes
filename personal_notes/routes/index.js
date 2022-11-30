var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/notes/index', function(req, res, next) {
  res.render('notes/index', { title: 'All Notes' });
});

router.get('/notes/create', function(req, res, next) {
  res.render('notes/create', { title: 'create' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'registration' });
});

module.exports = router;

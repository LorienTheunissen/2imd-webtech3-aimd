var express = require('express');
var router = express.Router();
var messageController = require('../controllers/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST message 
router.post('api/v1/messages', messageController.postMessage);

module.exports = router;

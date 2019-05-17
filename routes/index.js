var express = require('express');
var router = express.Router();
var messageController = require('../controllers/api/v1/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AIMD' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

// POST message
router.post('', messageController.postMessages);

// GET messages
router.get('', messageController.getMessages);

// GET message
router.get('/:id', messageController.getMessage);

// DELETE message
router.delete('/:id', messageController.deleteMessage);

// PUT (update) message
router.put('/:id', messageController.putMessage);

module.exports = router;

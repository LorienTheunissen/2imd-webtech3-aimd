var express = require('express');
var router = express.Router();
var messageController = require('../controllers/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AIMD' });
});

// POST message
router.post('/api/v1/messages', messageController.postMessages);

// GET messages
router.get('/api/v1/messages', messageController.getMessages);

// GET message
router.get('/api/v1/messages/:id', messageController.getMessage);

// DELETE message
router.delete('/api/v1/messages/:id', messageController.deleteMessage);

// PUT (update) message
router.put('/api/v1/messages/:id', messageController.putMessage);

module.exports = router;

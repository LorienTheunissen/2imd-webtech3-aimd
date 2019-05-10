const express = require('express');
const router = express.Router();
const messagesController = require('./../../../controllers/api/v1/messages')

/* api/v1/messages */
router.get("/", messagesController.getMessages);

router.post("/", messagesController.postMessages);

router.get('/:id', messagesController.getMessage);

router.delete('/:id', messagesController.deleteMessage);

router.put('/:id', messagesController.putMessage);

module.exports = router;
const express = require('express');
const router = express.Router();
<<<<<<< HEAD

const messagesController = require('./../../../controllers/api/v1/messages')

/* api/v1/messages */
router.get("/", messagesController.getMessages);

router.post("/", messagesController.postMessages);

router.get('/:id', messagesController.getMessage);

router.delete('/:id', messagesController.deleteMessage);

router.put('/:id', messagesController.putMessage);
=======
const messageController = require("./../../../controllers/api/v1/messages")


router.get("/", messageController.getMessages);
router.post("/", messageController.postMessages);
router.get("/:id", messageController.getMessages);
router.delete("/:id", messageController.deleteMessages);
router.put("/:id", messageController.putMessages);
>>>>>>> sass

module.exports = router;
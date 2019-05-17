const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const messageController = require("../../../controllers/message")


router.get("/", messageController.getMessages);
router.post("/", messageController.postMessages);
router.get("/:id", messageController.getMessages);
router.delete("/:id", messageController.deleteMessages);
router.put("/:id", messageController.putMessages);
=======
const messagesController = require('./../../../controllers/api/v1/messages')

/* api/v1/messages */
router.get("/", messagesController.getMessages);

router.post("/", messagesController.postMessages);

router.get('/:id', messagesController.getMessage);

router.delete('/:id', messagesController.deleteMessage);

router.put('/:id', messagesController.putMessage);
>>>>>>> 40f90d381ed40c3c64567ec800465f1506204dbe

module.exports = router;
const express = require('express');
const router = express.Router();

const messageController = require("./../../../controllers/api/v1/messages")

router.get("/", messageController.getMessages);
router.post("/", messageController.postMessages);
router.get("/:id", messageController.getMessages);
router.delete("/:id", messageController.deleteMessage);
router.put("/:id", messageController.putMessage);

module.exports = router;
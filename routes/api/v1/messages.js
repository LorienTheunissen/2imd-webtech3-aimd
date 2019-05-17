const express = require('express');
const router = express.Router();
const messageController = require("../../../controllers/message")


router.get("/", messageController.getMessages);
router.post("/", messageController.postMessages);
router.get("/:id", messageController.getMessages);
router.delete("/:id", messageController.deleteMessages);
router.put("/:id", messageController.putMessages);

module.exports = router;
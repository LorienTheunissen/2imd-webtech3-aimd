const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: String
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
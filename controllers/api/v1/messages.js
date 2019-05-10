const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: String,
    user: String
})

const Message = mongoose.model('Message', messageSchema);

let getMessages = (req, res) => {
    Message.find({
        "user":"Lorien"
    },(err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "data" : {
                    "messages": docs
                }
            });
        }
    })
}

let postMessages = (req, res) => {
    let message = new Message();
    message.text = "This is a message";
    message.user = "Lorien";
    message.save((err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data" : {
                    "message": doc
                }
            });
        }
    })
}

let getMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
        "data": {
            "message": `GETTING message with ID: ${id}`
        } 
    });
};

let deleteMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
        "data": {
            "message": `deleting message with ID: ${id}`
        } 
    });
}

let putMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
        "data": {
            "message": `updating message with ID: ${id}`
        } 
    });
}

module.exports.postMessages = postMessages;
module.exports.getMessages = getMessages;
module.exports.getMessage = getMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.putMessage = putMessage;
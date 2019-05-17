<<<<<<< HEAD
const Message = require('../../../models/Message');

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

let postMessages = (req, res, next) => {
    console.log(req.body);

    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;
    message.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save this message"
            });
        }
        if(!err){
            res.json({
                "status": "success",
                "data" : {
                    "message": doc
                }
            });
        }
    })
=======
let postMessages = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING new messages"
    });
}

let getMessages = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages"
    });
>>>>>>> sass
}

let getMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
<<<<<<< HEAD
        "data": {
            "message": `GETTING message with ID: ${id}`
        } 
=======
        "message": `GETTING message with ID: ${id}`
>>>>>>> sass
    });
};

let deleteMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
<<<<<<< HEAD
        "data": {
            "message": `deleting message with ID: ${id}`
        } 
=======
        "message": `DELETING a message with ID: ${id}`
>>>>>>> sass
    });
}

let putMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
<<<<<<< HEAD
        "data": {
            "message": `updating message with ID: ${id}`
        } 
=======
        "message": `UPDATING a message with ID: ${id}`
>>>>>>> sass
    });
}

module.exports.postMessages = postMessages;
module.exports.getMessages = getMessages;
module.exports.getMessage = getMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.putMessage = putMessage;
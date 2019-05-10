let getMessages = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages"
    });
}

let postMessages = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING new messages"
    });
}

let getMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
        "message": `GETTING message with ID: ${id}`
    });
};

let deleteMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
        "message": `DELETING a message with ID: ${id}`
    });
}

let putMessage = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
        "message": `UPDATING a message with ID: ${id}`
    });
}

module.exports.postMessages = postMessages;
module.exports.getMessages = getMessages;
module.exports.getMessage = getMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.putMessage = putMessage;
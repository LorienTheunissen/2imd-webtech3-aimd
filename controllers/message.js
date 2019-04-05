let postMessage = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message"
    });
}

let getMessages = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages"
    });
}

let getMessageId = (req, res) => {

    var id = req.params.id;

    res.json({
        "status": "success",
        "message": `GETTING message with ID: ${id}`
    });
};

module.exports.postMessage = postMessage;
module.exports.getMessages = getMessages;
module.exports.getMessageId = getMessageId;
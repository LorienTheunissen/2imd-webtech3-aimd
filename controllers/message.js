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

module.exports.postMessage = postMessage;
module.exports.getMessages = getMessages;
module.exports.getMessage = getMessage;
module.exports.deleteMessage = deleteMessage;
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

module.exports.postMessage = postMessage;
module.exports.getMessages = getMessages;
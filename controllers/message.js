let postMessage = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message"
    });
}

module.exports.postMessage = postMessage;
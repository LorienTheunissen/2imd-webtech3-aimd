const User = require('../models/User');

const signup = async (req, res, next) => {
    let username = req.body.username; // UI of postman
    let password = req.body.password;

    const user = new User({
        username: username
    });
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            "status": "success"
        })
    }).catch(error => {
        res.json({
            "status": "error"
        })
    });
};

module.exports.signup = signup;
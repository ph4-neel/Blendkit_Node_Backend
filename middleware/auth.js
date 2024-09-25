const {getUser} = require('../service/auth');

async function restrictToLoggedIn(req, res, next) {

    const userUid = req.cookies.uid;
    const user = getUser(userUid);

    if(!userUid)
        return res.status(404);

    if(!user)
        return res.status(404);

    req.user = user;
    next();
}


module.exports = {

    restrictToLoggedIn,
}
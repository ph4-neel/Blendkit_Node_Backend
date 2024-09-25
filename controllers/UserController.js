var db = require('../models/config');
const {v4 : uuid4} = require("uuid")
const {setUser} = require('../service/auth')
var User = db.user;

const UserRegister = async (req, res) => {

    const Neel = User.build({
        name: 'Neel',

    });// true
    console.log(jane.name);
    await Neel.save();
    console.log('data Has sucessfully Registered');
}

const UserLogin = async (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    const data = await Student.findOne({ where: { email:email, password:password } });
    if (data === null) {
        res.status(404);
    } else {
        const sessionId = uuid4();
        setUser(sessionId, data);
        res.cookie('uid',sessionId);
        res.status(200).json({data:data});
    }
}


const Dashboard = async (req, res) => {

    res.status(200)
}


module.exports = {

    UserRegister,
    UserLogin,
    Dashboard,
}

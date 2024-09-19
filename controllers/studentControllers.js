var Student = require('../models/student_model')
const {v4 : uuid4} = require("uuid")
const {setUser} = require('../service/auth')
const StudentRegister = async (req, res) => {

    const Neel = Student.build({
        name: 'Neel',
        email: '',
        phone: '',
        college: '',
        department: '',
        sin: '',
        password: '',
    });// true
    console.log(jane.name);
    await jane.save();
    console.log('Jane was saved to the database!');
}


const studentLogin = async (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    const data = await Student.findOne({ where: { email:email, password:password } });
    if (data === null) {
        res.status(404);
    } else {
        const sessionId = uuid4();
        setUser(sessionId,data);
        res.cookie("uid",sessionId);
        res.status(200).json({data:data});
    }
}



module.exports = {

    StudentRegister,
    studentLogin
}
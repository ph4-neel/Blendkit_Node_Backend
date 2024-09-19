var Student = require('../models/student_model')
const StudentRegister = async (req, res) => {

    const jane = Student.build({ 
        name: 'Neel',
        email:'',
        phone:'',
        college:'',
        department:'',
        sin:'',
        password:'',
     });
    console.log(jane instanceof User); // true
    console.log(jane.name);
    await jane.save();
    console.log('Jane was saved to the database!');
}



module.exports = {

    StudentRegister
}
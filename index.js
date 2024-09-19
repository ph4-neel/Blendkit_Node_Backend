const express = require('express');
var bodyParser = require('body-parser');
const Student = require('./models/student_model.js')
require('./models/config.js')
var StudentCrtl = require('./controllers/studentControllers')
const app = express();

app.use(bodyParser.json())



app.get('/',function (req,res){
    res.send("Home Page");
})

app.get('/Register',StudentCrtl.StudentRegister)

User.sync({ force: true });

app.listen(3000,() =>{
    console.log("App is running on : https://localhost:3000/");
})
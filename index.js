const express = require("express");
var bodyParser = require("body-parser");
const Student = require("./models/user_model");
require('./models')
const app = express();


app.use(bodyParser.json());

Student.sync({force : true});


//initialize API
app.get('/',function(req,res){

    res.send("Working")
})

//listening port number
app.listen(300,()=>{

    console.log("listening on port: 3000")
});
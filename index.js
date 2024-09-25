const express = require('express');
var bodyParser = require('body-parser');
var UserCrtl = require('./controllers/UserController.js')
var cookieParser = require('cookie-parser')
const {restrictToLoggedIn} = require('./middleware/auth.js');
require('./models/config.js')


const app = express();
app.use(bodyParser.json())
app.use(cookieParser())


app.get('/',function (req,res){
    res.send("Home Page");
})


app.get('/register',UserCrtl.UserRegister);
app.post('/login',UserCrtl.UserLogin);
app.get('/dashboard',restrictToLoggedIn,UserCrtl.Dashboard);

app.listen(3000,() =>{
    console.log("App is running on : https://localhost:3000/");
})
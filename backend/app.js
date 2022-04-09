require("dotenv").config();
require('./config/database').connect();
const express = require('express');
const User = require('./model/user');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); 


app.post('/user/signup', (req, res) => {
    const {name, email, password} = req.body;
    if( ! (name || email || password)){
        return res.json({message : "All Params are Compulsory", code : 400});
    }
    User.findOne({"email":email}, (err, user) => {
        if(err){
            return res.json({message : err, code : 500});
        }
        if(user != null){
            return res.json({message : "Email already exist", code : 409});
        }
        User.create({
            name, email, password
        });
        return res.json({message : "User Successfully Created", code : 201});
    })
})


app.post('/user/login', (req, res) => {
    const {email, password} = req.body;
    if( ! (email || password)){
        return res.json({message : "All Params are Compulsory", code : 400});
    }
    User.findOne({"email":email}, (err, user) => {
        if(err){
            return res.json({message : err, code : 500});
        }
        if(user == null){
            return res.json({message : "Invalid email", code : 400});
        }
        if(user.password === password){
            return res.json({message : "Successfully Logged In", code : 200, name : user.name});
        }
        return res.json({message : "Invalid password", code : 400});
    })
})

app.get("/", (req, res) => {
    return res.send("Home Page");
})

module.exports = app;
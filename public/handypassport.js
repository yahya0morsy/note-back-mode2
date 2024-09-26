const mongoose = require('mongoose');
var express = require('express');
const User = require('../src/schemas/user');


Login =async function Login(req,res,next){
    const {body} =req
    console.log("workes");
    const finduser =await User.findOne({Username:req.body.Username});
    try{
        if(!finduser){console.log("username not found");next()}
        if(finduser&&finduser.Password!==req.body.Password){console.log("wrong password"),next()}
         }
         catch(error){console.log(error)}
     
     if(finduser && finduser.Password==req.body.Password){
        console.log("hi")
        req.body.human = finduser.Username
        req.body.id = finduser._id;
        next()
        //logged = true
        } 


}
module.exports = Login
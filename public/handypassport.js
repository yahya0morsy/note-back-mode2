const mongoose = require('mongoose');
var Keys = require('../src/schemas/sesssion.js');
var express = require('express');
const User = require('../src/schemas/user');
const bcrypt = require("bcryptjs");
const { comparepass } = require('../public/hasher.js');
const { Genkey } = require('../public/key.js');
require('../public/hasher.js')
require('../public/key.js')
const date = new Date();
Login =async function Login(req,res,next){
    const {body} =req
    console.log("workes");
    const finduser =await User.findOne({Username:req.body.Username});
    try{
        if(!finduser){console.log("username not found");next()}
        if(finduser&&!comparepass(req.body.Password,finduser.Password)){console.log("wrong password"),next()}
         }
         catch(error){console.log(error)}
     
     if(finduser && comparepass(req.body.Password,finduser.Password)){
        const findkey = await Keys.findOne({Username:req.body.Username})
        if(findkey){
            const Newkey =findkey.Key;
            req.body.key = Newkey
        }
        if(!findkey){
            const Newkey = Genkey()
            req.body.key = Newkey
            const auth = new Keys({Username:finduser.Username,Key:Newkey})
            const savedkey =await auth.save() 
            
        }
       
        console.log("hi")
        req.body.human = finduser.Username
        req.body.id = finduser._id;
        next()
        //logged = true
        } 


}
module.exports = Login
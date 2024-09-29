const mongoose = require('mongoose');
const User = require('../src/schemas/user');
const Keys = require('../src/schemas/sesssion');


Serialize =  async function Serialize(req,res,next){
    console.log("inside s");
    const findkey =await Keys.findOne({Key:req.body.key});
    try{
        
        if(!findkey){console.log("not logged in"),next()}
         }
         catch(error){console.log(error)}
     
     if(findkey){
         req.body.human = findkey.Username
         req.body.owner = findkey.Username
         next()
        //logged = true
        } 


}
module.exports = Serialize
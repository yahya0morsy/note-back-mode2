const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    Username:{
        type: String,
        required: true,
        
    },
    Key:{
        type: String,
        required: true,
    },
    
})
const Keys = mongoose.model("Keys" ,Userschema)
module.exports = Keys
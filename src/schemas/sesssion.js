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
    expireAt: { type: Date, expires: 60*60*48 ,default: Date.now}
})
const Keys = mongoose.model("Keys" ,Userschema)
module.exports = Keys
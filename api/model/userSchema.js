const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    shname:{
        type:String,
        required:true
    },
    uid:{
        type:Number,
        required:true
    },
    Aname:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    },
    mid:{
        type:String,
        required:true
    },
    pword:{
        type:String,
        required:true
    }
})
const Admin = mongoose.model('ADMIN',userSchema);
module.exports = Admin;
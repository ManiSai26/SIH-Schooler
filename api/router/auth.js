const express = require('express');
const router = express.Router();
require('../db/conn');
const Admin = require('../model/userSchema');
router.get('/',(req,res)=>{
   res.send('hello world from the server router js');
});
router.post('/register',(req,res)=>{
    const {shname, uid, Aname, phno, mid, pword} = body;
    if(!shname||!uid||!Aname||!phno||!mid||!pword){
        return res.status(422).json({error: "please fill all fields"});
    }
    admin.findOne({mid:mid})
    .then((adminExist)=>{
        if(adminExist){
            return res.status(422).json({error: "Admin already exists"});
        }

        const admin = new Admin({shname, uid, Aname, phno, mid, pword});
        admin.save().then(()=>{
           res.status(201).json({message:"Admin registered successfully!!"});
        }).catch((err)=>res.status(500).json({error:"Failed to register"}));
    }).catch(err=>{console.log(err);});
});
module.exports = router;
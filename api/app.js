const dotenv = require('dotenv'); 
const express = require('express');
const app = express();
const cors = require("cors");

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT;
app.get('/',(req,res)=>{
   res.send('hello from server');
});
const Admin = require('./model/userSchema');
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})
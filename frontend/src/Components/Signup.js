import React, { useState } from 'react';
import Logo from "../media/Logo.svg";
import SPimg from "../media/LPimg.svg";
import '../StyleSheets/Signup.css'
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
const Signup = () => {
    //const history = useNavigate();
    const SendData = async(e) =>{
      const shname=document.getElementById("schoolName").value;
      const uid=document.getElementById("udiseCode").value;
      const Aname=document.getElementById("Name").value;
      const phno=document.getElementById("contactNo").value;
      const mid=document.getElementById("mailId").value;
      const pword=document.getElementById("password").value;
      console.log({
        shname, uid, Aname, phno, mid, pword 
      });
      e.preventDefault()
      const res = await fetch("http://127.0.0.1:5000/register",{mode:'cors'},{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          shname, uid, Aname, phno, mid, pword 
        })
      });
      const data = await res.json();
      if(data.status===422||!data){
        window.alert("invalid registration");
        console.log("invalid registration");
      }
      else{
        window.alert("registration successfull");
        console.log("registration successfull");
      }
      //history.push("/Login");
    }
    return ( 
        <div className="SPMaindiv">
      <div className="SPlogodiv">
      <Link to='/'><img src={Logo} alt="Logo" /></Link>
        <span>Schooler</span>
      </div>
      <div className="SPContentdiv">
        <img src={SPimg} alt="SPimg" />
        <div className="SPbox">
            <span>Signup</span>
            <div className="SPinpbox">
            <input type={'text'} placeholder='School Name' id="schoolName" />
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Udise Code' id="udiseCode"/>
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Name' id="Name"/>
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Contact no' id="contactNo"/>
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Mail-id' id="mailId"/>
            </div>
            <div className="SPinpbox">
            <input type={'password'} placeholder='Password' id="password"/>
            </div>
            <input type={'submit'} value='Signup' onClick={SendData}/>
            <div className="SPactext"><span>Have an account <a href="/">Login</a></span></div>
        </div>
      </div>
    </div>
     );
}
 
export default Signup;
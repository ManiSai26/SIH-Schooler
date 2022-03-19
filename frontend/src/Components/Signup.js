import React, { useState } from 'react';
import Logo from "../media/Logo.svg";
import SPimg from "../media/LPimg.svg";
import '../StyleSheets/Signup.css'
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
const Signup = () => {
    const history = useNavigate();
    const [admin,setAdmin]=useState({
        shname:"", uid:"", Aname:"", phno:"", mid:"", pword:""
    });
    let name,value;
    const handleinputs=(e)=>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;
      setAdmin({...admin,[name]:value});
    }
    const SendData = async(e) =>{
      e.preventDefault()
      const {shname, uid, Aname, phno, mid, pword} = admin;
      const res = await fetch("/register",{
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
      history.push("/Login");
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
            <input type={'text'} placeholder='School Name' id="schoolName" value={admin.shname} onInput={handleinputs}/>
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Udise Code' id="udiseCode" value={admin.uid} onChange={handleinputs}/>
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Name' id="Name" value={admin.Aname} onChange={handleinputs}/>
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Contact no' id="contactNo" value={admin.phno} onChange={handleinputs}/>
            </div>
            <div className="SPinpbox">
            <input type={'text'} placeholder='Mail-id' id="mailId" value={admin.mid} onChange={handleinputs}/>
            </div>
            <div className="SPinpbox">
            <input type={'password'} placeholder='Password' id="password" value={admin.pword} onChange={handleinputs}/>
            </div>
            <input type={'submit'} value='Signup' onClick={SendData}/>
            <div className="SPactext"><span>Have an account <a href="/">Login</a></span></div>
        </div>
      </div>
    </div>
     );
}
 
export default Signup;
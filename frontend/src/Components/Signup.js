import React from 'react';
import Logo from "../media/Logo.svg";
import SPimg from "../media/LPimg.svg";
import '../StyleSheets/Signup.css';
import { Link } from "react-router-dom";
const Signup = () => {
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
            <input type={'text'} placeholder='School Name' id="schoolName"/>
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
            <input type={'submit'} value='Signup' />
            <div className="SPactext"><span>Have an account <a href="/login">Login</a></span></div>
        </div>
      </div>
    </div>
     );
}
 
export default Signup;
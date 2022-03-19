import React from "react";
import "../StyleSheets/Login.css";
import Logo from "../media/Logo.svg";
import { Link } from "react-router-dom";
import LPimg from "../media/LPimg.svg";
const Login = () => {
  return (
    <div className="LPMaindiv">
      <div className="LPlogodiv">
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
        <span>Schooler</span>
      </div>
      <div className="LPContentdiv">
        <img src={LPimg} alt="LPimg" />
        <div className="LPbox">
          <span>Login</span>
          <div className="LPinpbox">
            <select name="role" id="role">
              <option value="volvo">Student</option>
              <option value="saab">Teacher</option>
              <option value="mercedes">Admin</option>
            </select>
          </div>
          <div className="LPinpbox">
            <input type={"text"} placeholder="Mail-id" id="mailId" />
          </div>
          <div className="LPinpbox">
            <input type={"password"} placeholder="Password" id="password" />
          </div>
          <input type={"submit"} value="Login" />
          <div className="LPactext">
            <span>
              Don't have an account <a href="/Signup">Signup</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

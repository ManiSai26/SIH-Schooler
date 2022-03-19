import React from "react";
import Attendance from "../media/Attendence.svg";
import HomeWork from "../media/HomeWork.svg";
import Progressandreports from "../media/Progressandreports.svg";
import CCAandECA from "../media/CCAandECA.svg";
import Recommendations from "../media/Recommendations.svg";
import WorkMadeEasy from "../media/WorkMadeEasy.svg";
import "../StyleSheets/LandingBody.css";
import Mail from '../media/Mail.png';
import facebook from '../media/facebook.svg';
import waves from '../media/Waves1.svg';
import Twitter from '../media/Twitter.svg';
const LandingBody = () => {
  return (
    <div>
      <div className="LBbody">
        <div className="LBbodyhead">
          <span>Smart Education</span>
        </div>
        <div className="LBbodydesc">
          <span>Get Started - Get Ahead</span>
        </div>
        <div className="LBbodybutton">
          <input type={"submit"} value="Learn More" />
        </div>
        <img src={waves} alt='waves'/>
      </div>
      <div className="LBServices">
        <div className="LBServicehead">
          <span>SERVICES</span>
        </div>
        <div className="LBservicedesc">
          <span>Education to Empower</span>
        </div>
        <div className="LBServicesrow">
          <div className="LBServicebox">
            <img src={Attendance} alt="Attendance" />
            <div className="LBServiceboxhead">
              <span>Attendance Monitoring</span>
            </div>
            <div className="LBServiceboxdesc">
              <span>Monitor students attendance easily and efficiently</span>
            </div>
          </div>
          <div className="LBServicebox">
            <img src={HomeWork} alt="Attendance" />
            <div className="LBServiceboxhead">
              <span>HomeWork Tracking</span>
            </div>
            <div className="LBServiceboxdesc">
              <span>Track all home works assigned to the student</span>
            </div>
          </div>
          <div className="LBServicebox">
            <img src={Progressandreports} alt="Attendance" />
            <div className="LBServiceboxhead">
              <span>Progress and Reports</span>
            </div>
            <div className="LBServiceboxdesc">
              <span>Access students Report cards and performance </span>
            </div>
          </div>
        </div>
        <div className="LBServicesrow">
          <div className="LBServicebox">
            <img src={CCAandECA} alt="Attendance" />
            <div className="LBServiceboxhead">
              <span>CCA and ECA Schedules</span>
            </div>
            <div className="LBServiceboxdesc">
              <span>Get to know all Non-academic activities conducted by the management</span>
            </div>
          </div>
          <div className="LBServicebox">
            <img src={Recommendations} alt="Attendance" />
            <div className="LBServiceboxhead">
              <span>Smart System Recommendations</span>
            </div>
            <div className="LBServiceboxdesc">
              <span>System generates feedback for students based on their Report Cards</span>
            </div>
          </div>
          <div className="LBServicebox">
            <img src={WorkMadeEasy} alt="Attendance" />
            <div className="LBServiceboxhead">
              <span>Work-Made-Easy</span>
            </div>
            <div className="LBServiceboxdesc">
              <span>Teachers can remotely access their class scheduled and Time tables</span>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="LBAboutdiv">
        <div className="LBAboutdetails">
          <div className="LBAbouthead">
            <span>ABOUT</span>
          </div>
          <div className="LBAbouttitle">
            <span>
              Our website provides you with Real-time Monitoring of students
              progress
            </span>
          </div>
          <div className="LBAboutdesc">
            <span>
              We facilitate Registration of all Government recognized schools in
              our Website and help the management simplify their tasks. We make
              it easy for the parents to access their wards learning progress in
              Real-Time with aspect to both Academic and Non-Academic
              activities. System Recommendations help students direct their time
              efficiently in the areas they need to improve thereby helping
              students recognize their blind areas
            </span>
          </div>
        </div>
        <div className="LBaboutimg">
          <img src={Attendance} alt="about" />
        </div>
      </div>
      {/* CONTACT */}
      <div className="LBContact">
        <div className="LBcontactBox">
          <div className="LBcontacthead">
            <span>CONTACT</span>
          </div>
          <div className="LBContacttitle">
            <span>Let's Work Together</span>
          </div>
          <div className="LBcontactinfo">
            <div className="LBcontactdetails"><span>Hyderabad Telangana</span><br/></div>
            <div className="LBcontactdetails"><span>ramakanthseshabhattar@gmail.com</span><br/></div>
            <div className="LBcontactdetails"><span>Tel: +91 8367498911</span></div>
          </div>
          <div className="LBsocialmedia">
            <img src={Mail} alt='mail'/>
            <img src={facebook} alt='mail'/>
            <img src={Twitter} alt='mail'/>
          </div>
        </div>
        <div className="LBcontactForm">
            <div className="LBContactRow">
              <div className="LBContactDetails">
                  <span>First Name</span>
                  <input type={'text'} id='FirstName'/>
              </div>
              <div className="LBContactDetails">
                  <span>Last Name</span>
                  <input type={'text'} id='LastName'/>
              </div>
            </div>
            <div className="LBContactDetails">
                  <span>Email</span>
                  <input type={'text'} id='Email'/>
              </div>
              <div className="LBContactDetails">
                  <span>Leave us a message...</span>
                  <input type={'text'} id='message'/>
              </div>
            <div className="LBContactbutton">
              <input type={'submit'} value='Submit'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;

import React from 'react';
import Logo from '../media/Logo.svg';
import Attendance from "../media/Attendance.svg";
import Bargraphicon from "../media/bargrapghicon.svg";
import Profileicon from "../media/profileicon.svg";
import Logouticon from "../media/logouticon.svg";
import '../StyleSheets/DashboardSideNav.css';
const DashboardSideNav = () => {
    return ( 
        <div>
      <div className="dbNavdiv">
        {/* <div className="dblogo">
          <img src={Logo} />
        </div> */}
        <a href="#">
          <div
            className={
               "dbNavbarComponent"
            }
           
          >
            <div className="dbNavabarCompimg">
              <img src={Profileicon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Profile</span>
            </div>
          </div>
        </a>
        <a href="#DBMainDivID">
          <div
            className={
               "dbNavbarComponent"
            }
            
          >
            <div className="dbNavabarCompimg">
              <img src={Bargraphicon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Dashboard</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div
            className={
               "dbNavbarComponent"
            }
          >
            <div className="dbNavabarCompimg">
              <img src={Attendance} />
            </div>
            <div className="dbNavbarComptext">
              <span>Attendance</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div
            className={
               "dbNavbarComponent"
            }
          >
            <div className="dbNavabarCompimg">
              <img src={Profileicon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Recommendations</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div
            className={
              "dbNavbarComponent"
            }
          >
            <div className="dbNavabarCompimg">
              <img src={Logouticon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Logout</span>
            </div>
          </div>
        </a>
      </div>
    </div>
     );
}
 
export default DashboardSideNav;
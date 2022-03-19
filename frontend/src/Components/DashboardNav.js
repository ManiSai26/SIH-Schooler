import React from "react";
import '../StyleSheets/DashboardNav.css';
import Logo from '../media/Logo.svg'
const DashboardNav = () => {
  return <div className="DBnav">
      <div className="DBLogodiv">
          <img src={Logo} alt="logo"/>
          <span>Schooler</span>
      </div>
  </div>;
};

export default DashboardNav;

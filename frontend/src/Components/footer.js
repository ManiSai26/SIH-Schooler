import React from "react";
import FBIcon from "../media/facebookFooter.svg";
import InstagramIcon from "../media/instagramFooter.svg";
import DiscordIcon from "../media/discordFooter.svg";
import "../StyleSheets/footer.css";
const footer = () => {
  return (
    <div className="footerMainDiv">
      <div className="footerDisplay1366Div">
        <div className="footerIntroDiv">
          <span className="footerlogo">Schooler</span>
          <span className="footerIntroBody">
            Education to Empower
          </span>
        </div>
        <div className="footerLinksDiv">
          <div className="footerLinksSocialDiv">
            <img src={FBIcon} className="footerFBLogo" alt="img" />
            <img
              src={InstagramIcon}
              className="footerInstagramLogo"
              alt="img"
            />
            <img src={DiscordIcon} className="footerDiscordLogo" alt="img" />
          </div>
          <div className="footerLinksCompanyDiv">
            <a
              href="/"
              target="_blank"
              className="footerLinkPrivacyPolicy footerLinkCompany"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              target="_blank"
              className="footerLinkSecurity footerLinkCompany"
            >
              Cookie Policy
            </a>
            <a
              href="/"
              target="_blank"
              className="footerLinkTermsOfService footerLinkCompany"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="footerContactDiv">
          <span className="footerContactTitle">Contact</span>
          <div className="footerContactContent">
            <span className="footerContactPhone">Phone: +91 8367498911</span>
            <span className="footerContactEmail">
              Email: ramakanthseshabhattar@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

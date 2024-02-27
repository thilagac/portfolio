import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>123 Housing Society</p>
            <p>Chennai</p>
          </div>
        
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            1-22-333-4432
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            info@gmail.com
          </h4>
        </div></div>
        <div className="right">
            <h4>About the Company</h4>
            <p>This is me thilaga.CEO & Founder of TechInfo.
                I enjoy discussing new project and design challenges.
            </p>
            <div className="social">
            <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

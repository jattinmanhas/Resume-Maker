import React from "react";
import  './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
return (
  
	<div className="myfooter no-print">
        <ul className="main-ul">
          About Us
          <li className="footer-li"><a className="footerLink" href="\about-us">Aim </a></li>
          <li className="footer-li"><a className="footerLink" href="\about-us">Vision </a></li>
        </ul>
        <ul className="main-ul">
          Services
          <li className="footer-li">  <a className="footerLink" href="\resume"> Resume Making</a></li>
          <li className="footer-li"><a className="footerLink" href="\resume">Cover Letter</a></li>
          <li className="footer-li"><a className="footerLink" href="\resume">CV</a></li>
        </ul>
        <ul className="main-ul">
          Social Media
          <li className="footer-li"><a className="footerLink" href="\contact-us">Facebook</a></li>
          <li className="footer-li"><a className="footerLink" href="\contact-us">Instagram</a></li>
          <li className="footer-li"><a className="footerLink" href="\contact-us">Twitter</a></li>
        </ul>
        <ul className="main-ul">
          Contact Us
          <li className="footer-li"><a className="footerLink" href="\contact-us">Online</a></li>
          <li className="footer-li"><a className="footerLink" href="\contact-us">Ahmedabad</a></li>
          <li className="footer-li"><a className="footerLink" href="\contact-us">Indore</a></li>
        </ul>
      </div>
    );
  }
export default Footer;

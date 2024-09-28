import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="container-fluid footer bg-dark" id="footer">
      <div className="footer-content row d-flex mt-5 p-4 text-light">
        <div className="col-lg-4 col-md-6  footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            adipisci, mollitia illo delectus facilis accusantium iusto dolore at
            laborum magni.
          </p>
          <img src={assets.facebook_icon} alt="" className="me-2" />
          <img src={assets.twitter_icon} alt="" className="me-2" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
        <div className="col-lg-4 col-md-6 mt-3 footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="col-md-4 col-sm-12 mt-3 footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-238-956-3920</li>
                <li>mahima@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright p-2 text-light">Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;

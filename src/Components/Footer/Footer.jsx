import React from "react";
import "./Footer.css";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import mail from "../../assets/images/mail.png";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-all">
      <div className="footer-item1">
        <p>Contact</p>
        {/* <span>Designed & Built by Skylark Chris © 2025</span> */}
      </div>

      <div className="footer-item2">
        <div className="github">
          <a href="https://github.com/Skylark355" target="_blank">
            <img src={github} alt="" />
          </a>
        </div>

        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/christopher-adzesi-4b508b231/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>

        <div className="instagram">
          <a href="https://www.instagram.com/skylark_chris/" target="_blank">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="footer-item3">
        <a href="mailto:adzesi.chris@gmail.com">
          <img src={mail} alt="" />{" "}
        </a>
        <a href="mailto:adzesi.chris@gmail.com">
          <span>Mail me</span>
        </a>
      </div>
      </div>
      <span className="copy">Designed & Built by Skylark Chris © 2025</span>
    </div>
  );
};

export default Footer;

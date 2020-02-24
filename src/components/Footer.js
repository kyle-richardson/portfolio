import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <a href="mailto:kyle.richardson1@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://github.com/kyle-richardson">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://linkedin.com/in/kyle-m-richardson">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <p>&copy;Copyright 2020 | Kyle Richardson</p>
    </div>
  );
};

export default Footer;

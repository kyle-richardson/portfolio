import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <a
          className="mail-icon"
          href="mailto:kyle.richardson1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          className="github-icon"
          href="https://github.com/kyle-richardson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="linkedin-icon"
          href="https://linkedin.com/in/kyle-m-richardson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <p>&copy;Copyright 2020 | Kyle Richardson</p>
    </div>
  );
};

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '40px 0',
    textAlign: 'center',
    background: (dark) => dark ? '#3d4149' : 'rgb(230,230,230)'
  }
  }))

const Footer = ({darkMode}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={useStyles(darkMode).container}>
      <h2>Get In Touch</h2>
      <p style={{width: matches ? "95%" : "70%", margin: "0 auto"}}>I am always on the lookout for opportunities to expand my knowledge 
        and help others. Please don't hesitate to reach out and connect!</p>
      <div className="footer-icons">
        <a
          className="mail-icon"
          href="mailto:kyle.richardson1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="4x" />
        </a>
        <a
          className="github-icon"
          href="https://github.com/kyle-richardson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
        <a
          className="linkedin-icon"
          href="https://linkedin.com/in/kyle-m-richardson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
      </div>
      <p>Made by Kyle Richardson</p>
    </div>
  );
};

export default Footer;

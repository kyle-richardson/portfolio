import React, { useState } from "react";

import CodeIcon from "@material-ui/icons/Code";
import { InlineIcon } from "@iconify/react";
import githubIcon from "@iconify/icons-bytesize/github";
import zeitIcon from "@iconify/icons-simple-icons/zeit";
import netlifyIcon from "@iconify/icons-cib/netlify";
import amazonawsIcon from "@iconify/icons-simple-icons/amazonaws";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

import RenderTool from "./RenderTool";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    width: "400px",
    margin: "30px",
    justifyContent: "space-between",
    boxShadow: dark => dark ? "0px 0px 15px slategray" : "0px 0px 15px lightgray",
    transition: 'all .3s ease-in-out',
    '& > *': {
      flex: "1"
    },
    '&:hover': {
      boxShadow: dark => dark ? "0px 5px 23px slategray" : "0px 5px 23px lightgray",
      transform: 'translate3d(0px, -1px, 0px)'
    },
    padding: "20px"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px"
  },
  button: {
    minWidth: "40px",
    minHeight: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    paddingTop: "8px",
    '&:hover': {
      background: dark => dark ? "rgb(49, 53, 61)" : "rgb(238, 238, 238)"
    }
  },
  overlay: {
    display: (props) => (props.open ? "block" : "none"),
    backgroundColor: (props) => (props.dark ? '#3d4149' : 'rgb(230,230,230)'),
    position: "absolute",
    top: "10%",
    left: "5%",
    opacity: (props) => (props.open ? "1" : "0"),
    padding: "20px",
    width: "90%",
    borderRadius: "8px",
    zIndex: "1000",
    transition: "opacity 1s ease",
    cursor: "pointer",
    color: (props) => (props.dark ? "white" : "black"),
  },
}));

const Proj = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`single-project-container ${useStyles(props.darkMode).root}`}>
      <div className={classes.title}>
        <div
          title="Show description"
          className={useStyles(props.darkMode).button}
          onClick={handleToggle}
        >
          <ShortTextIcon fontSize="large" />
        </div>
        <h3>{props.name}</h3>
        <div
          title="View Code"
          className={useStyles(props.darkMode).button}
          onClick={() => window.open(props.github, "_blank")}
        >
          <CodeIcon fontSize="large" />
        </div>
      </div>

      <div className="image">
        <a
          title="Visit Site"
          href={props.url}
          target={props.url}
          rel="noopener"
        >
          <img
            style={
              open
                ? { opacity: ".3", width: "100%", borderRadius: "8px" }
                : { width: "100%", borderRadius: "8px" }
            }
            src={props.image}
            alt={props.name}
          />
        </a>
        <Fade in={open} timeout={500}>
          <Paper>
            <div
              className={
                useStyles({ dark: props.darkMode, open: open }).overlay
              }
              onClick={handleToggle}
            >
              <Typography variant="h5">{props.description}</Typography>
            </div>
          </Paper>
        </Fade>
      </div>
      {!!props.libraries && (
        <div style={{ width: "100%" }}>
          <span>Libraries: </span>
          {props.libraries.map((lib, ind) => (
            <span key={lib}>
              {ind !== props.libraries.length - 1 ? `${lib}, ` : `${lib}`}
            </span>
          ))}
        </div>
      )}
      {props.notes && <p>Notes: {props.notes}</p>}
      <div
        style={{
          padding: "10px 0",
        }}
      >
        {!!props.tools && (
          <span className="icons-container">
            {props.tools.map((tool) => (
              <RenderTool tool={tool} key={tool} />
            ))}
            {props.deployed && (
              <span title={props.deployed}>
                <InlineIcon
                  icon={
                    props.deployed === "github pages"
                      ? githubIcon
                      : props.deployed === "netlify"
                      ? netlifyIcon
                      : props.deployed === "zeit"
                      ? zeitIcon
                      : props.deployed === "aws"
                      ? amazonawsIcon
                      : null
                  }
                  width="1.8em"
                />
              </span>
            )}
          </span>
        )}
      </div>
      
    </div>
  );
};

export default Proj;

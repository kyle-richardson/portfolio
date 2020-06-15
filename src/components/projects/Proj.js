import React, { useState, useEffect } from "react";

import CodeIcon from "@material-ui/icons/Code";
import { InlineIcon } from "@iconify/react";
import githubIcon from "@iconify/icons-bytesize/github";
import zeitIcon from "@iconify/icons-simple-icons/zeit";
import netlifyIcon from "@iconify/icons-cib/netlify";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Typography from "@material-ui/core/Typography";

import RenderTool from "./RenderTool";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    paddingBottom: "10px",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
  even: {
    backgroundColor: (dark) => (dark ? "#282c34" : "white"),
  },
  odd: {
    backgroundColor: (dark) => (dark ? "#69868c" : "#a6d5df"),
  },
  overlay: {
    display: (props) => (props.open ? "block" : "none"),
    backgroundColor: (props) => (props.dark ? "gray" : "lightgray"),
    position: "relative",
    top: "-45vh",
    left: "7vw",
    opacity: "1",
    padding: "20px",
    width: "35vw",
  },
}));

const Proj = (props) => {
  const [
    marginChange,
    // setMarginChange
  ] = useState(0);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    // setMarginChange(document.querySelector(".overlay-text").clientHeight);
  }, []);
  return (
    <div className={`${classes.root} ${useStyles(props.darkMode)[props.type]}`}>
      <div className="proj-title">
        <div
          title="Show desscription"
          style={{ cursor: "pointer" }}
          onClick={handleToggle}
        >
          <ShortTextIcon fontSize="large" />
        </div>
        <h3>{props.name}</h3>
        <div
          title="View Code"
          style={{ cursor: "pointer" }}
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
            style={open ? { opacity: ".3", width: "100%" } : { width: "100%" }}
            src={props.image}
            alt={props.name}
          />
        </a>
        <div
          className={useStyles({ dark: props.darkMode, open: open }).overlay}
        >
          <Typography variant="h5">{props.description}</Typography>
        </div>
      </div>

      <div
        style={{
          marginTop: -marginChange,
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
                      : null
                  }
                  width="1.8em"
                />
              </span>
            )}
          </span>
        )}
      </div>
      <br />
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
    </div>
  );
};

export default Proj;

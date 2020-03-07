import React from "react";

import LanguageIcon from "@material-ui/icons/Language";
import CodeIcon from "@material-ui/icons/Code";

import RenderTool from "./RenderTool";

const Proj = props => {
  return (
    <div className={props.type}>
      <div className="proj-title">
        <div
          title="Visit Site"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = props.url)}
        >
          <LanguageIcon fontSize="large" />
        </div>
        <h3>{props.name}</h3>
        <div
          title="View Code"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = props.github)}
        >
          <CodeIcon fontSize="large" />
        </div>
      </div>

      <a title="Visit Site" href={props.url} target={props.url} rel="noopener">
        <img className="image" src={props.image} alt={props.name} />
      </a>
      <br />
      {!!props.tools && (
        <p className="icons-container">
          {props.tools.map(tool => (
            <RenderTool tool={tool} key={tool} />
          ))}
        </p>
      )}

      <br />
      {!!props.libraries && (
        <>
          <span>Libraries: </span>
          {props.libraries.map(lib => (
            <span key={lib}>{lib}, </span>
          ))}
        </>
      )}
      {props.notes && <p>Notes: {props.notes}</p>}
    </div>
  );
};

export default Proj;

import React from "react";

import LanguageIcon from "@material-ui/icons/Language";
import CodeIcon from "@material-ui/icons/Code";

import RenderTool from "./RenderTool";

const Proj = props => {
  return (
    <div className={props.type}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50vw",
          margin: "0 auto",
          alignItems: "center"
        }}
      >
        <LanguageIcon fontSize="large" />
        <h3>{props.name}</h3>
        <CodeIcon fontSize="large" />
      </div>

      <a href={props.url} target={props.url} rel="noopener">
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

import React from "react";

import RenderTool from "./RenderTool";

const Proj = props => {
  return (
    <div className={props.type}>
      <a href={props.url} target={props.url} rel="noopener">
        <h3>{props.name}</h3>
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

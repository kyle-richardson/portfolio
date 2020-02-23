import React from "react";

import RenderTool from "./RenderTool";

const Proj = props => {
  return (
    <div>
      <a href={props.url} target="_blank">
        <h3>{props.name}</h3>
        <img className="image" src={props.image} alt={props.name} />
      </a>
      Built with:{" "}
      {!!props.tools &&
        props.tools.map(tool => (
          <span>
            <RenderTool tool={tool} />
          </span>
        ))}
      Libraries:{" "}
      {!!props.libraries && props.libraries.map(lib => <span>{lib}, </span>)}
      <p>{props.notes}</p>
    </div>
  );
};

export default Proj;

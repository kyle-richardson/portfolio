import React from "react";

const Proj = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.url}</p>
      <p>{props.notes}</p>
      {!!props.tools && props.tools.map(tool => <span>{tool}, </span>)}
      {!!props.libraries && props.libraries.map(lib => <span>{lib}, </span>)}
    </div>
  );
};

export default Proj;

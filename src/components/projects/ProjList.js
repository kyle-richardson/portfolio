import React from "react";
import Proj from "./Proj";
import { projects } from "../../data";

const ProjList = () => {
  return (
    <div>
      {projects.map(proj => {
        return <Proj key={proj.name} {...proj} />;
      })}
    </div>
  );
};

export default ProjList;

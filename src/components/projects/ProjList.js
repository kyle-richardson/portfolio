import React from "react";
import Proj from "./Proj";
import { projects } from "../../data";

const ProjList = () => {
  return (
    <div>
      {projects.map((proj, id) => {
        return (
          <Proj
            key={proj.name}
            {...proj}
            type={id % 2 === 0 ? "odd-styles" : "even-styles"}
          />
        );
      })}
    </div>
  );
};

export default ProjList;

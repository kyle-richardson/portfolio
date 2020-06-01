import React, { useState, useEffect } from "react";
import Proj from "./Proj";
import { projects } from "../../data";

const ProjList = ({ searchList }) => {
  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    if (searchList.length > 0) {
      const newList = projects.filter((proj) =>
        searchList.every((item) => proj.tools.includes(item))
      );
      setProjectList(newList);
    } else {
      setProjectList(projects);
    }
    // eslint-disable-next-line
  }, [searchList]);

  return (
    <div>
      {projectList &&
        projectList.map((proj, id) => {
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

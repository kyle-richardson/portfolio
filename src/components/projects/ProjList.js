import React, { useState, useEffect } from "react";
import Proj from "./Proj";
import { projects } from "../../data";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "30px",
    paddingTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: (dark) => dark ? "#282c34" : "white",
    // maxWidth: "80%",
    margin: "0 auto"
  }
}))

const ProjList = ({ darkMode, searchList }) => {
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
    <div className={useStyles(darkMode).root}>
      {projectList &&
        projectList.map((proj, id) => {
          return (
            <Proj
              key={proj.name}
              {...proj}
              darkMode={darkMode}
              type={id % 2 === 0 ? "odd" : "even"}
            />
          );
        })}
    </div>
  );
};

export default ProjList;

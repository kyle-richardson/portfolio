import React from "react";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faNodeJs,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import { ButtonStyles } from "../utils/styles";

const TopSection = ({ searchList, setSearchList }) => {
  const toggleSearch = name => {
    if (searchList && searchList.includes(name)) {
      const newList = arrayRemove(searchList, name);
      setSearchList(newList);
    } else {
      setSearchList([...searchList, name]);
    }
  };
  const arrayRemove = (arr, value) => arr.filter(ele => ele !== value);

  return (
    <header id="App-header">
      <h1>Kyle Richardson - Portfolio</h1>
      <h3>Full-stack developer</h3>
      <div id="projects">
        <p>Filter projects by:</p>
        <div className="button-container">
          <Button
            onClick={() => toggleSearch("html5")}
            className={ButtonStyles({ color: "html5", list: searchList }).root}
          >
            <FontAwesomeIcon icon={faHtml5} />
            <span style={{ marginLeft: "4px" }}>HTML5</span>
          </Button>
          <Button
            onClick={() => toggleSearch("css3")}
            className={ButtonStyles({ color: "css3", list: searchList }).root}
          >
            <FontAwesomeIcon icon={faCss3} />
            <span style={{ marginLeft: "4px" }}>CSS3</span>
          </Button>
          <Button
            onClick={() => toggleSearch("react")}
            className={ButtonStyles({ color: "react", list: searchList }).root}
          >
            <FontAwesomeIcon icon={faReact} />
            <span style={{ marginLeft: "4px" }}>REACT</span>
          </Button>
          <Button
            onClick={() => toggleSearch("node-js")}
            className={
              ButtonStyles({ color: "node-js", list: searchList }).root
            }
          >
            <FontAwesomeIcon icon={faNodeJs} />
            <span style={{ marginLeft: "4px" }}>NODEJS</span>
          </Button>
          <Button
            onClick={() => toggleSearch("python")}
            className={ButtonStyles({ color: "python", list: searchList }).root}
          >
            <FontAwesomeIcon icon={faPython} />
            <span style={{ marginLeft: "4px" }}>PYTHON</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopSection;
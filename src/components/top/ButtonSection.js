import React from "react";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faNodeJs,
  faPython,
  faLess,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { ButtonStyles } from "../../utils/styles";

const buttonList = [
  {
    text: "HTML5",
    styleName: "html5",
    icon: faHtml5,
  },
  {
    text: "CSS3",
    styleName: "css3",
    icon: faCss3,
  },
  {
    text: "LESS",
    styleName: "less",
    icon: faLess,
  },
  {
    text: "JS",
    styleName: "js",
    icon: faJs,
  },
  {
    text: "REACT",
    styleName: "react",
    icon: faReact,
  },
  {
    text: "NODEJS",
    styleName: "node-js",
    icon: faNodeJs,
  },
  // {
  //   text: "PYTHON",
  //   styleName: "python",
  //   icon: faPython,
  // },
];

const ButtonSection = ({ darkMode, searchList, setSearchList }) => {
  const toggleSearch = (name) => {
    if (searchList && searchList.includes(name)) {
      const newList = arrayRemove(searchList, name);
      setSearchList(newList);
    } else {
      setSearchList([...searchList, name]);
    }
  };
  const arrayRemove = (arr, value) => arr.filter((ele) => ele !== value);
  return (
    <div id="projects">
      <h4>Projects</h4>
      <div className="button-container">
        {buttonList.map((ele) => {
          return (
            <Button
              title={ele.styleName}
              onClick={() => toggleSearch(ele.styleName)}
              className={
                ButtonStyles({
                  color: ele.styleName,
                  list: searchList,
                  dark: darkMode,
                }).root
              }
            >
              <FontAwesomeIcon icon={ele.icon} />
              <span className="button-names" style={{ marginLeft: "4px" }}>
                {ele.text}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonSection;

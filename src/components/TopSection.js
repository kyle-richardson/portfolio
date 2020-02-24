import React from "react";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";

const TopSection = () => {
  return (
    <header id="App-header">
      <h1>Kyle Richardson - Portfolio</h1>
      <h3>Full-stack developer</h3>
      <div id="projects">
        <p>Filter projects by:</p>
        <div className="button-container">
          <Button color="primary">
            <FontAwesomeIcon icon={faCss3} />
            {`CSS3`}
          </Button>
          <Button color="secondary">
            <FontAwesomeIcon icon={faHtml5} />
            {`HTML5`}
          </Button>
          <Button color="primary">
            <FontAwesomeIcon icon={faReact} />
            {`React`}
          </Button>
          <Button color="secondary">
            <FontAwesomeIcon icon={faNodeJs} />
            {`NodeJs`}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopSection;

import React from "react";
import Button from "@material-ui/core/Button";

const TopSection = () => {
  return (
    <header id="App-header">
      <h1>Kyle Richardson - Portfolio</h1>
      <h3>Full-stack developer</h3>
      <div id="projects">
        <p>Filter projects by:</p>
        <div className="button-container">
          <Button color="primary">CSS3</Button>
          <Button color="secondary">HTML5</Button>
          <Button color="primary">React</Button>
          <Button color="secondary">NodeJs</Button>
        </div>
      </div>
    </header>
  );
};

export default TopSection;

import React from "react";
// import CarouselSection from "./CarouselSection";
import ButtonSection from "./ButtonSection";
import AboutMe from "./AboutMe";
import Intro from "./Intro"

const TopSection = (props) => {
  return (
    <header id="App-header">
      <Intro darkMode={props.darkMode}/>
      {/* <CarouselSection /> */}
      <AboutMe {...props} />
      <ButtonSection {...props} />
    </header>
  );
};

export default TopSection;

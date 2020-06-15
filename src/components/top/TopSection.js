import React from "react";
// import CarouselSection from "./CarouselSection";
import ButtonSection from "./ButtonSection";
import AboutMe from "./AboutMe";

const TopSection = (props) => {
  return (
    <header id="App-header">
      <h1>Kyle Richardson - Portfolio</h1>
      <h3 style={{ paddingBottom: "20px" }}>Full-stack developer</h3>
      {/* <CarouselSection /> */}
      <AboutMe {...props} />
      <ButtonSection {...props} />
    </header>
  );
};

export default TopSection;

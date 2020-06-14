import React from "react";
// import CarouselSection from "./CarouselSection";
import ButtonSection from "./ButtonSection";

const TopSection = (props) => {
  return (
    <header id="App-header">
      <h1>Kyle Richardson - Portfolio</h1>
      <h3>Full-stack developer</h3>
      {/* <CarouselSection /> */}
      <ButtonSection {...props} />
    </header>
  );
};

export default TopSection;

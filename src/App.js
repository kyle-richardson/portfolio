import React, { useState } from "react";
import "./App.css";
// import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjList from "./components/projects/ProjList";
import TopSection from "./components/TopSection";

function App() {
  const [searchList, setSearchList] = useState([]);
  return (
    <div className="App">
      <Header />
      <TopSection searchList={searchList} setSearchList={setSearchList} />
      <ProjList searchList={searchList} />
      <Footer />
    </div>
  );
}

export default App;

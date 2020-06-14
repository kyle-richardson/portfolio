import React, { useState } from "react";
import "./App.css";
// import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjList from "./components/projects/ProjList";
import TopSection from "./components/top/TopSection";
import { useDarkMode } from "./utils/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [searchList, setSearchList] = useState([]);
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <TopSection
        darkMode={darkMode}
        searchList={searchList}
        setSearchList={setSearchList}
      />
      <ProjList darkMode={darkMode} searchList={searchList} />
      <Footer />
    </div>
  );
}

export default App;

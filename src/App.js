import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjList from "./components/projects/ProjList";
import TopSection from "./components/TopSection";

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <ProjList />
      <Footer />
    </div>
  );
}

export default App;

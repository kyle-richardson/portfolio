import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjList from "./components/projects/ProjList";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Kyle Richardson - Portfolio</h1>
        <h3>Full-stack developer</h3>
      </header>
      <section>
        <ProjList />
      </section>
      <Footer />
    </div>
  );
}

export default App;

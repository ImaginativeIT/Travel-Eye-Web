import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/nav-bar";
import Home from "./Components/home/home";
import PlaceSelection from "./Components/place-selection/place-selection";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Home />
        <PlaceSelection />
      </main>
    </React.Fragment>
  );
}

export default App;

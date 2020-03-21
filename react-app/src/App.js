import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/nav-bar";
import Home from "./Components/Home/home";
import PlaceSelection from "./Components/Place-selection/place-selection";

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

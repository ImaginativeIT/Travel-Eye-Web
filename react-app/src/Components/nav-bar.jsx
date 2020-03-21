import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-light"
        style={{ backgroundColor: "DodgerBlue" }}
      >
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }
}

export default NavBar;

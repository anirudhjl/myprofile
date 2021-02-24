import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav style={{ width: "100%", textAlign: "center", padding: "1%" }}>
        <NavLink
          exact
          to="/"
          style={{ padding: "2%", fontSize: "1.4em", fontWeight: "bold" }}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          style={{ padding: "2%", fontSize: "1.4em", fontWeight: "bold" }}
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/projects"
          style={{ padding: "2%", fontSize: "1.4em", fontWeight: "bold" }}
        >
          Projects
        </NavLink>
        <NavLink
          exact
          to="/contact"
          style={{ padding: "2%", fontSize: "1.4em", fontWeight: "bold" }}
        >
          Contact
        </NavLink>
      </nav>
    );
  }
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <button type="button">Main Page</button>
    </Link>
    <Link to="/characters">
      <button type="button">Characters</button>
    </Link>
    <Link to="/locations">
      <button type="button">Locations</button>
    </Link>
    <Link to="/episodes">
      <button type="button">Episodes</button>
    </Link>
  </div>
);

Header.propTypes = {};

export default Header;

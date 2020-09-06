import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Social Blog</Link>
      </h1>
    </div>
  );
};

export default Header;

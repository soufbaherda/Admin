import React from "react";
import "./Topbar.css"
import { IoMdBook } from "react-icons/io";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (

    <div className="navbar">
      <div className="container">
        <div className="logoContainer">
          <Link to="/">
            <IoMdBook className="logo" />
          </Link>
          <h2>
            E<span className="act">-</span>Learn
          </h2>
        </div>
      </div>
    </div>


  );
};

export default Topbar;

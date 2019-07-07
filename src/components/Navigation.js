import React from "react";
import "./Navigation.css";
import logo from "../beer.svg";
import { Link } from "react-router-dom";

const Navigation = ({ toggleModal, loggedIn }) => {
  return (
    <nav className="navigation">
      <Link to="/">
        <div className="hero">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Brew Boy</h1>
        </div>
      </Link>

      <div className="nav-links">
        {loggedIn ? (
          <React.Fragment>
            <a href="#">Recipes</a> <a href="#">Tools</a>{" "}
            <Link to="/" onClick={toggleModal}>
              Logout
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a href="#">Register</a>{" "}
            <Link to="/home" onClick={toggleModal}>
              Login
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

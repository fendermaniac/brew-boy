import React from "react";
import "./Navigation.css";
import logo from "../beer.svg";

const Navigation = ({ toggleModal, loggedIn }) => {
    return (<nav className="navigation">
        <h1>Brew Boy</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            {loggedIn ? (<React.Fragment>
                <a>Recipes</a> <a>Tools</a> <a onClick={toggleModal}>Logout</a>
            </React.Fragment>) : (<React.Fragment>
                <a>Register</a> <a>Login</a>
            </React.Fragment>)}
        </div>
    </nav>);
};

export default Navigation;

import React from "react";
import "./Navigation.css";
import logo from "../beer.svg";

const Navigation = ({ toggleModal, loggedIn }) => {
    return (<nav className="navigation">
        <h1>Brew Boy</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            {loggedIn ? (<React.Fragment>
                <a href="#" >Recipes</a> <a href="#" >Tools</a> <a href="#"  onClick={toggleModal}>Logout</a>
            </React.Fragment>) : (<React.Fragment>
                <a href="#" >Register</a> <a href="#" onClick={toggleModal} >Login</a>
            </React.Fragment>)}
        </div>
    </nav>);
};

export default Navigation;

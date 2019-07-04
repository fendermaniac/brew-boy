import React, { Component } from "react";
import logo from "./beer.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: true,
      loggedIn: false,
      existingUser: false
    };
  }
  toggleModalHandler = () => {
    const modalWrapper = document.getElementById("modal");
    modalWrapper.classList.toggle("is-modal-closed");
    this.setState({
      isVisible: !this.state.isVisible,
      loggedIn: !this.state.loggedIn
    });
  };

  toggleRegistrationLogin = () => {
    this.setState({
      existingUser: !this.state.existingUser
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          loggedIn={this.state.loggedIn}
          toggleModal={this.toggleModalHandler}
        />
        <Modal
          visible={this.state.isVisible}
          toggleModal={this.toggleModalHandler}
          toggleRegistrationLogin={this.toggleRegistrationLogin}
          existingUser={this.state.existingUser}
        />
        <p className="App-intro">Let's get brewing!</p>
      </div>
    );
  }
}

export default App;

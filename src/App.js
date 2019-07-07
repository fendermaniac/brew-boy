import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: true,
      loggedIn: false,
      existingUser: false
    };
  }
  toggleModalHandler = (e) => {
    // e.preventDefault();
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
 <Router>
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
     
      <Route exact path='/' component={LoginPage} />      
      <Route 
          path="/home" 
          component={Home}
          // render={() => {this.state.loggedIn ? <Home/>: ''} } 
      />
      
        
      </div>
      </Router>
    );
  }
}

export default App;

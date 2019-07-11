import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Cards from './components/Cards';

class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: [],
      currentBrewery: {},
      isVisible: true,
      loggedIn: false,
      existingUser: false,
    };
  }

  componentDidMount = () => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(res => res.json())
      .then(data => this.setState({
        breweries: data
      }), () => {
        this.setState({
          loggedIn: localStorage.getItem('loggedIn')
        })
      })
  }

  toggleModalHandler = (e) => {
    // e.preventDefault();
    const modalWrapper = document.getElementById("modal");
    modalWrapper.classList.toggle("is-modal-closed");
    this.setState({
      isVisible: !this.state.isVisible,
      loggedIn: !this.state.loggedIn
    }, () => {
      localStorage.setItem('loggedIn', this.state.loggedIn);
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
          render={(routeProps) => 
            <Home 
            {...routeProps} breweries={this.state.breweries}/>
            }
      />
            <Route 
          path="/recipes" 
          component={Cards}
      />
      
        
      </div>
      </Router>
    );
  }
}

export default App;

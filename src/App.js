import React, { Component } from 'react';
import logo from './beer.svg';
import './App.css';
import Navigation from './components/Navigation';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
        isVisible: true
    }
  }
  toggleModalHandler = () => {
    this.setState({
        isVisible: !this.state.isVisible
    });
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
        <Modal visible={this.state.isVisible} toggleModal={this.toggleModalHandler} />
        <h2>Brew Boy</h2>
        <p className="App-intro">
          Let's get brewing!
        </p>
      </div>
    );
  }
}

export default App;

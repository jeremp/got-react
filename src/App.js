import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './MainComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Got Characters explorer</h1>
        </header>        
        <MainComponent />        
      </div>
    );
  }
}

export default App;

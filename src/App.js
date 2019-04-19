import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components /Membre';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bonjour Soufian</p>
          <Membre nom ="Soufian" />
          <Membre nom ="Sami" />
          <Membre nom ="Oliver" />
          <Membre nom ="Antho" />
          <Membre nom ="Fouz" />
        </header>
      </div>
    ); 
  }
}

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
    
  }
}

export default App;

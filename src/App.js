import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Input from './components/Input';
import logo from './logo.svg';
import './App.css';

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

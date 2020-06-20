import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Input from './components/Input';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      heroActive: true
    }
  }

  heroButtonHandler = () => {
    this.setState({
      heroActive: !this.state.heroActive
    })
  }

  render() {

    return (
      <div className="App">

        <Header />
        {this.state.heroActive ? <Hero buttonHander={this.heroButtonHandler}/> : null }
        

      </div>
    );

  }
}

export default App;

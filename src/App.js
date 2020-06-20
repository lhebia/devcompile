import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ArticlesContainer from './components/ArticlesContainer';
// import Input from './components/Input';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      heroActive: true,
      articlesActive: false
    }
  }

  heroButtonHandler = () => {
    this.setState({
      heroActive: false,
      articlesActive: true
    })
  }

  render() {

    return (
      <div className="App">
        <Header />

        {this.state.heroActive ? <Hero buttonHander={this.heroButtonHandler}/> : null }
        {this.state.articlesActive ? <ArticlesContainer /> : null}

      </div>
    );

  }
}

export default App;

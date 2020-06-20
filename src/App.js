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
      articlesActive: false,
      siteTitle: 'Developer Orbits'
    };
  }

  startArticleHandler = (e) => {
    e.preventDefault();
    this.setState({
      heroActive: false,
      articlesActive: true,
    });
  };

  locationReload(e) {
    e.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <Header 
          onHomeClick={this.locationReload} 
          onArticlesClick={this.startArticleHandler}
        />

        {this.state.heroActive ? (
          <Hero buttonHander={this.startArticleHandler} />
        ) : null}
        {this.state.articlesActive ? <ArticlesContainer /> : null}
      </div>
    );
  }
}

export default App;

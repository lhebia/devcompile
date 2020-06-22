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
      siteTitle: "Devstagram"
    };
  }

  startArticleHandler = (e) => {
    e.preventDefault();
    this.setState({
      heroActive: false,
      articlesActive: true,
    });
  };

  locationReloadHandler(e) {
    e.preventDefault();
    window.location.reload();
  }

  titleClickHandler = () => {
    const cohortNames = [
      "Cohort Orbitz",
      "Dankest Cohort",
      `Threatened Swan's Cohort`,
      `Friday Colin's Cohort`,
      `Owen's 72 Survivors`,
      `Dankshana's Cohort`,
      `Cohort Pineapple Juice Friday's`,
      "Cohort Calc(30 - 3)",
      `Who ate Esther's oranges?`,
      `Papa Colin's Cohort`,
    ];
    const randNum = Math.floor(Math.random() * cohortNames.length);
    this.setState({
      siteTitle: cohortNames[randNum],
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          siteTitle={this.state.siteTitle}
          onHomeClick={this.locationReloadHandler}
          onArticlesClick={this.startArticleHandler}
          titleClickHandler={this.titleClickHandler}
        />

        {this.state.heroActive ? (
          <Hero 
            siteTitle={this.state.siteTitle}
            buttonHander={this.startArticleHandler} />
        ) : null}
        {this.state.articlesActive ? <ArticlesContainer /> : null}
      </div>
    );
  }
}

export default App;

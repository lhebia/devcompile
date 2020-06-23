import React, { Component } from 'react';
import firebase from "./firebase";
import Header from './components/Header';
import Hero from './components/Hero';
import ArticlesContainer from './components/ArticlesContainer';
import AboutContainer from './components/AboutContainer';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      heroActive: true,
      articlesActive: false,
      aboutActive: false,
      siteTitle: "Devstagram",
      savedItems: []
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const data = response.val();
      const newState = [];
      for (let key in data) {
        newState.push(data[key]);
      }
      this.setState({
        savedItems: newState,
      })
    })
  }

  // Reload entire app
  locationReloadHandler() {
    window.location.reload();
  }

  // Load the Articles component
  startArticleHandler = () => {
    this.setState({
      heroActive: false,
      articlesActive: true,
      aboutActive: false
    });
  };

  aboutClickHandler = () => {
    this.setState({
      heroActive: false,
      articlesActive: false,
      aboutActive: true,
    });
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
          onAboutClick={this.aboutClickHandler}
          titleClickHandler={this.titleClickHandler}
        />
        {this.state.heroActive ? (
          <Hero
            siteTitle={this.state.siteTitle}
            buttonHander={this.startArticleHandler}
          />
        ) : null}
        {this.state.articlesActive ? <ArticlesContainer /> : null}
        {this.state.aboutActive ? <AboutContainer componentTitle={this.state.siteTitle}/> : null}
      </div>
    );
  }
}

export default App;

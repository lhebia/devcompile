import React, { Component } from 'react';
import firebase from "./firebase";
import Header from './components/Header';
import Hero from './components/Hero';
import ArticlesContainer from './components/ArticlesContainer';
import AboutContainer from './components/AboutContainer';
import './App.css';
import SavedArticles from './components/SavedArticles';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroActive: true,
      articlesActive: false,
      savedArticlesActive: false,
      aboutActive: false,
      siteTitle: "Devstagram",
      savedItems: [],
    };
  }

  // Initialize firebase and set data into state
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (response) => {
      const data = response.val();
      const newState = [];
      for (let key in data) {
        newState.push({ key: key, name: data[key] });
      }
      this.setState({
        savedItems: newState,
      });
    });
  }

  // Reload entire app
  locationReloadHandler() {
    window.location.reload();
  }

  // Load the Articles component, unmount all others
  startArticleHandler = () => {
    this.setState({
      heroActive: false,
      articlesActive: true,
      aboutActive: false,
      savedArticlesActive: false,
    });
  };

  // Load the About component, unmount all others
  aboutClickHandler = () => {
    this.setState({
      heroActive: false,
      articlesActive: false,
      aboutActive: true,
      savedArticlesActive: false,
    });
  };

  // Load the Saved Articles component, unmount all others
  savedArticleClickHandler = () => {
    this.setState({
      heroActive: false,
      articlesActive: false,
      aboutActive: false,
      savedArticlesActive: true,
    });
  };

  // Playful function to switch the site title names to those in a list by random
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

  takeId = (id) => {
    console.log(id);
    axios({
      url: `https://dev.to/api/articles/${id}`,
      method: "GET",
      dataType: "JSON"
    }).then((response) => {
      const returnedItem = response.data;
      const objectToPush = {
        id: returnedItem.id,
        title: returnedItem.title,
        url: returnedItem.url,
        imageUrl: returnedItem.social_image,
        description: returnedItem.description,
      };
      const dbRef = firebase.database().ref();
      dbRef.push(objectToPush);
    }, (error) => {
      console.log('Error:', error);
    });
  };

  // Remove the saved item from firebase
  deleteItem(itemKey) {
    const dbRef = firebase.database().ref();
    dbRef.child(itemKey).remove();
  }

  render() {
    return (
      <div className="App">
        <Header
          siteTitle={this.state.siteTitle}
          onHomeClick={this.locationReloadHandler}
          onArticlesClick={this.startArticleHandler}
          onAboutClick={this.aboutClickHandler}
          onSavedButtonClick={this.savedArticleClickHandler}
          titleClickHandler={this.titleClickHandler}
          savedCounter={this.state.savedItems.length}
        />
        {this.state.heroActive ? (
          <Hero
            siteTitle={this.state.siteTitle}
            buttonHander={this.startArticleHandler}
          />
        ) : null}
        {this.state.articlesActive ? (
          <ArticlesContainer passUpId={(id) => this.takeId(id)} />
        ) : null}
        {this.state.aboutActive ? (
          <AboutContainer componentTitle={this.state.siteTitle} />
        ) : null}
        {this.state.savedArticlesActive ? (
          <SavedArticles
            deleteItem={(itemKey) => this.deleteItem(itemKey)}
            data={this.state.savedItems}
          />
        ) : null}
      </div>
    );
  }
}

export default App;

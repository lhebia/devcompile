import React, { Component } from 'react';
import ArticlePiece from "./ArticlePiece";
import axios from 'axios';

class ArticlesContainer extends Component {
  // Baseline state to reset down to when needed
  baseState = {
    articles: [],
    perPage: 30,
    onPage: 1,
    totalPages: null,
    scrolling: false,
  };

  constructor() {
    super();
    this.state = this.baseState;
  }

  // API call function, returns promise
  getDataAndSetState = (dataType = null) => {
    const { perPage, onPage } = this.state;
    return axios({
      url: "https://dev.to/api/articles",
      method: "GET",
      dataType: "JSON",
      params: {
        "api-key": "P2W9zTv2CUZhGasCa3PiU2Gf",
        tag: dataType,
        per_page: perPage,
        page: onPage,
      },
    });
  };

  componentDidMount() {
    // Main API call
    this.getDataAndSetState().then((response) => {
      const { articles } = this.state;
      this.setState({
        articles: [...articles, ...response.data],
        scrolling: false,
      });
    });
    // Add scroll listener to window, use to fire handeScroll
    this.scrollListener = window.addEventListener("scroll", (e) => {
      this.handleScroll(e);
    });
  }

  // Listen for scroll
  handleScroll = (e) => {
    const { scrolling } = this.state;
    if (scrolling) return;
    const lastTile = document.querySelector("ul.Articles-Grid > li:last-child");
    const lastTileOffset = lastTile.offsetTop + lastTile.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastTileOffset - bottomOffset) this.loadMoreArticles();
  };

  // Required for inifinite scrolling, load more articles once scroll gets to bottom of page
  loadMoreArticles = () => {
    this.setState(
      (prevState) => ({
        onPage: prevState.onPage + 1,
      }),
      this.getMoreDataAndSetState
    );
  };

  // EXPERIMENT
  // Experimenting resetting state back to original
  resetState = () => {
    this.setState(this.baseState);
  };

  // Special API call function required for Inifnite scrolling
  getMoreDataAndSetState = () => {
    this.getDataAndSetState().then((response) => {
      const { articles } = this.state;
      this.setState({
        articles: [...articles, ...response.data],
        scrolling: false,
      });
    });
  }

  // Handler to take care of "Filter" buttons on articles page
  // Call API with keyword pressed and setState accordingly
  articleButtonHandler = (searchKeyWord) => {
    this.getDataAndSetState(searchKeyWord).then((response) => {
      this.setState({
        articles: [...response.data],
        scrolling: false,
      });
    });
  };

  render() {
    return (
      <section className="Articles wrapper">
        <div className="Articles-TopBar">
          <h2>Articles</h2>
          <form className="flexContainer">
            <label className="visuallyHidden" htmlFor="searchKeyword">Search</label>
            <input type="text" name="searchKeyword" id=""/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="Articles-ButtonContainer">
          <button
            className="ButtonReset"
            onClick={() => this.articleButtonHandler("react")}
          >
            React
          </button>
          <button
            className="ButtonReset"
            onClick={() => this.articleButtonHandler("javascript")}
          >
            Javascript
          </button>
          <button
            className="ButtonReset"
            onClick={() => this.articleButtonHandler("css")}
          >
            CSS
          </button>
        </div>
        <div>
          <ul className="Articles-Grid">
            {this.state.articles.map((data) => {
              return (
                <ArticlePiece
                  key={data.id}
                  socialImage={data.social_image}
                  imageAlt={data.slug}
                  url={data.url}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default ArticlesContainer;
import React, { Component } from 'react';
import ArticlePiece from './ArticlePiece';
import ErrorArticlePiece from './ErrorArticlePiece';
import FilterButton from './FilterButton';
import axios from 'axios';

class ArticlesContainer extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      perPage: 30,
      onPage: 1,
      totalPages: null,
      scrolling: false,
      userInput: "",
      noResponse: false,
    };
  }

  // Main API call function, returns promise
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
    // Main API call to set component
    this.getDataAndSetState(this.state.userInput).then((response) => {
      const { articles } = this.state;
      this.setState({
        articles: [...articles, ...response.data],
        scrolling: false,
      });
    });
    // Add scroll listener to window, use to fire handeScroll
    this.listener = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.listener);
  }

  // Listen for scroll hitting bottom of page
  handleScroll = () => {
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

  // Special API call function required for Inifnite scrolling
  getMoreDataAndSetState = () => {
    this.getDataAndSetState(this.state.userInput).then((response) => {
      const { articles } = this.state;
      this.setState({
        articles: [...articles, ...response.data],
        scrolling: false,
      });
    });
  };

  // Handler to take care of "Filter" buttons on articles page and search submit
  // Call API with keyword pressed or item searched and setState accordingly
  articleButtonHandler = (searchKeyWord) => {
    this.setState({
      noResponse: false,
    });
    this.getDataAndSetState(searchKeyWord).then(
      (response) => {
        if (response.data.length === 0) {
          this.setState({
            noResponse: true,
            articles: [],
          });
          return;
        }
        this.setState({
          articles: [...response.data],
          scrolling: false,
        });
      },
      (error) => {
        this.setState({
          noResponse: true,
        });
      }
    );
  };

  // Bind user input to state
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Specific actions for the filter buttons
  handleFilter = (keyword) => {
    // Set the keyword into state
    this.setState({
      userInput: keyword,
    });
    // Call API with keyword
    this.articleButtonHandler(keyword);
  };

  // Specific method for the search feature to prevent default actions
  handleSubmit = (e) => {
    e.preventDefault();
    this.articleButtonHandler(this.state.userInput);
  };

  componentWillUnmount() {
    // Remove event listener bound to app on unmount
    window.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <section className="Articles wrapper">
        <div className="Articles-TopBar">
          <h2>
            Feed
          </h2>
          <form className="flexContainer">
            <label className="visuallyHidden" htmlFor="userInput">
              Keyword Search
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="userInput"
              id=""
              value={this.state.userInput}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </form>
        </div>
        <div className="Articles-ButtonContainer">
          <p>Filter by:</p>
          <FilterButton
            filterName="React"
            clickFilterButton={() => this.handleFilter("react")}
          />
          <FilterButton
            filterName="JavaScript"
            clickFilterButton={() => this.handleFilter("javascript")}
          />
          <FilterButton
            filterName="CSS"
            clickFilterButton={() => this.handleFilter("css")}
          />
        </div>
        <div>
          <ul className="Articles-Grid">
            {!this.state.noResponse ? null : <ErrorArticlePiece />}
            {this.state.articles.map((data, index) => {
              return (
                <ArticlePiece
                  key={index}
                  creationDate={data.readable_publish_date}
                  socialImage={data.social_image}
                  imageAlt={data.slug}
                  positiveReactions={data.positive_reactions_count}
                  url={data.url}
                  title={data.title}
                  description={data.description}
                  passId={() => this.props.passUpId(data.id)}
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
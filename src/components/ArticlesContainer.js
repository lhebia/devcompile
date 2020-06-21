import React, { Component } from 'react';
import ArticlePiece from "./ArticlePiece";
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
        }
    }

    componentDidMount() {
        // Main API call
        this.getDataAndSetState();
        // Add scroll listener to window, use to fire handeScroll
        this.scrollListener = window.addEventListener('scroll', (e) => {
          this.handleScroll(e);
        })
    }

    // Listen for scroll
    handleScroll = (e) => {
      const { scrolling } = this.state;
      if (scrolling) return;
      const lastTile = document.querySelector('ul.Articles-Grid > li:last-child');
      const lastTileOffset = lastTile.offsetTop + lastTile.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      const bottomOffset = 20;
      if (pageOffset > lastTileOffset - bottomOffset) this.loadMoreArticles();
    }

    getDataAndSetState = (dataType=null) => {
      const { perPage, onPage, articles } = this.state;
      axios({
        url: "https://dev.to/api/articles",
        method: "GET",
        dataType: "JSON",
        params: {
          "api-key": "P2W9zTv2CUZhGasCa3PiU2Gf",
          tag: dataType,
          per_page: perPage,
          page: onPage,
        },
      }).then((response) => {
        this.setState({
          articles: [...articles, ...response.data],
          scrolling: false
        });
      });
    }

    loadMoreArticles = () => {
      this.setState(prevState => ({
        onPage: prevState.onPage + 1
      }), this.getDataAndSetState)
    }

    articleButtonHandler = (searchKeyWord) => {
      console.log(searchKeyWord);
      this.getDataAndSetState(searchKeyWord);
    }

    render() {
        return (
          <section className="Articles wrapper">
            <h2>Articles</h2>
            {/* <div className="Article-ButtonContainer">
              <button className="ButtonReset" onClick={() => this.articleButtonHandler("react")}>
                React
              </button>
              <button className="ButtonReset" onClick={() => this.articleButtonHandler("javascript")}>
                Javascript
              </button>
              <button className="ButtonReset" onClick={() => this.articleButtonHandler("css")}>
                CSS
              </button>
            </div> */}
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
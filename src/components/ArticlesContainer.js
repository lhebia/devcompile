import React, { Component } from 'react';
import ArticlePiece from "./ArticlePiece";
import axios from 'axios';

class ArticlesContainer extends Component {

    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.getDataAndSetState();
    }

    getDataAndSetState = (dataType=null) => {
      axios({
        url: "https://dev.to/api/articles",
        method: "GET",
        dataType: "JSON",
        params: {
          "api-key": "P2W9zTv2CUZhGasCa3PiU2Gf",
          tag: dataType
        },
      }).then((response) => {
        this.setState({
          articles: response.data
        });
      });
    }

    articleButtonHandler = (searchKeyWord) => {
      console.log(searchKeyWord);
      this.getDataAndSetState(searchKeyWord);
    }

    render() {
        return (
          <section className="Articles wrapper">
            <h2>Articles</h2>
            <div className="Article-ButtonContainer">
              <button className="ButtonReset" onClick={() => this.articleButtonHandler("react")}>
                React
              </button>
              <button className="ButtonReset" onClick={() => this.articleButtonHandler("javascript")}>
                Javascript
              </button>
              <button className="ButtonReset" onClick={() => this.articleButtonHandler("css")}>
                CSS
              </button>
            </div>
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
          </section>
        );
    }
}

export default ArticlesContainer;
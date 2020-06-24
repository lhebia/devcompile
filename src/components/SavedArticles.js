import React, { Component } from 'react'
import SavedArticlePiece from "./SavedArticlePiece";

// Component to manage Saved Articles area - uses SavedArticlePiece as each article tile
export default class SavedArticles extends Component {

    render() {

        const fullData = this.props.data;

        return (
          <div className="Articles SavedArticles">
            <h2>
              Saved Articles
            </h2>
            <ul className="Articles-Grid wrapper">
              {fullData.map((data) => {
                const { key, name } = data;
                return (
                  <SavedArticlePiece
                    key={key}
                    socialImage={name.imageUrl}
                    imageAlt={name.description}
                    url={name.url}
                    title={name.title}
                    description={name.description}
                    deleteItem={() => this.props.deleteItem(key)}
                  />
                );
              })}
            </ul>
          </div>
        );
    }
}

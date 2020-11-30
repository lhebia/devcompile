import React from 'react'
import SavedArticlePiece from "./SavedArticlePiece";

// Component to manage Saved Articles area - uses SavedArticlePiece as each article tile
const SavedArticles = ({ data, deleteItem }) => {
  return (
    <div className="Articles SavedArticles">
      <h2>
        Saved Articles
      </h2>
      <ul className="Articles-Grid wrapper">
        {data.map((data) => {
          const { key, name } = data;
          return (
            <SavedArticlePiece
              key={key}
              socialImage={name.imageUrl}
              imageAlt={name.description}
              url={name.url}
              title={name.title}
              description={name.description}
              deleteItem={() => deleteItem(key)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SavedArticles;

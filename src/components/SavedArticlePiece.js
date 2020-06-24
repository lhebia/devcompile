import React from "react";

const SavedArticlePiece = (props) => {
  return (
    <li>
      <div className="flexContainer SavedArticlePiece-ButtonContainer">
        <button
          aria-label="Delete saved item"
          onClick={props.deleteItem}
          className="ButtonReset"
        >
          X
        </button>
      </div>
      <img src={props.socialImage} alt={props.imageAlt}></img>
      <div className="ArticlePiece-TextContainer">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <h3>{props.title}</h3>
        </a>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default SavedArticlePiece;

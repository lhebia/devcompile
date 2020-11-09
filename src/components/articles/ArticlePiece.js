import React from 'react';

// This creates the component that is each article in the "Feed" section
const ArticlePiece = (props) => {

  const { url, socialImage, imageAlt, creationDate, positiveReactions, passId, title, description } = props;

  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={socialImage} alt={imageAlt}></img>
      </a>
      <div className="flexContainer ArticlePiece-ButtonContainer">
        <p>
          {creationDate} <span>&#xb7;</span> Liked by:{" "}
          {positiveReactions}
        </p>
        <button onClick={passId} className="ButtonReset">
          <code>compile</code>
        </button>
      </div>
      <div className="ArticlePiece-TextContainer">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ArticlePiece;
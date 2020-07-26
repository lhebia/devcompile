import React from 'react';

// This creates the component that is each article in the "Feed" section
const ArticlePiece = (props) => {
    return (
      <li>
        <a href={props.url}>
          <img src={props.socialImage} alt={props.imageAlt}></img>
        </a>
        {/* <img src={props.socialImage} alt={props.imageAlt}></img> */}
        <div className="flexContainer ArticlePiece-ButtonContainer">
          <p>
            {props.creationDate} <span>&#xb7;</span> Liked by:{" "}
            {props.positiveReactions}
          </p>
          <button onClick={props.passId} className="ButtonReset">
            <code>compile</code>
          </button>
        </div>
        <div className="ArticlePiece-TextContainer">
          <a href={props.url}>
            <h3>{props.title}</h3>
          </a>
          <p>{props.description}</p>
        </div>
      </li>
    );
}

export default ArticlePiece;
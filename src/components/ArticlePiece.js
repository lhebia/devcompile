import React from 'react';

const ArticlePiece = (props) => {
    return (
      <li>
        <p>{props.creationDate}</p>
        <img
          src={props.socialImage}
          alt={props.imageAlt}
        ></img>
        <div className="flexContainer ArticlePiece-ButtonContainer">
          <p>Liked by: {props.positiveReactions}</p>
          <button onClick={props.passId} className="ButtonReset">Add to list</button>
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
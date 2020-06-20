import React from 'react';

const ArticlePiece = (props) => {
    return (
      <li>
        <img src={props.socialImage} alt={props.imageAlt}></img>
        <a href={props.url}>
          <p>{props.title}</p>
        </a>
        <p>{props.description}</p>
      </li>
    );
}

export default ArticlePiece;
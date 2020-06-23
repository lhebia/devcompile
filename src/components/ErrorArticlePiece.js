import React from "react";

const ErrorArticlePiece = () => {
  return (
    <li className="fullSizeLi">
      <img
        src="https://miro.medium.com/max/1400/1*pUEZd8z__1p-7ICIO1NZFA.png"
        alt="Error has occurred"
      ></img>
        <h3>Sorry, your search returned no results / error.</h3>
      <p>Unable to dispaly results as none were received.</p>
    </li>
  );
};

export default ErrorArticlePiece;

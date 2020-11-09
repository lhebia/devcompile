import React from "react";
import errorMessage from "../../assets/errorMessage.jpg";

const ErrorArticlePiece = () => {
  return (
    <li className="fullSizeLi">
      <img src={errorMessage} alt="Error has occurred"></img>
      <h3>Sorry, your search returned no results / error.</h3>
      <p>Unable to dispaly results as none were received.</p>
    </li>
  );
};

export default ErrorArticlePiece;

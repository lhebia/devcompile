import React from 'react';
import about from './../assets/about.png';

export default function AboutContainer(props) {
    return (
      <div className="wrapper">
        <div className="About-Container">
          <div className="wrapper">
            <img
              src={about}
              alt="A vector art sketch of a man inside of a circle"
              className="About-Image"
            />
            <h3>{props.componentTitle}</h3>
            <p>
              {props.componentTitle} is a place for all devs and aspiring devs
              alike. Somewhere to safely peruse the articles and learnings you
              can take in as a developer while taking away distractions. This is
              a safe place for all to scroll, learn, read and grow. It allows
              those of us who can't not be scrolling, to at least do so with the
              aim of learning something new, or being able to research a topic
              and learn about it from others. Built by devs, for devs.
            </p>
            <p>
              API data from <a href="https://dev.to">Dev.to</a> & Illustrations
              from <a href="https://www.humaaans.com/">Humaaans</a>
            </p>
            <p>
              Made with{" "}
              <span role="img" aria-label="Love">
                ❤️
              </span>{" "}
              in 2020 by <a href="https://lhebia.com">Lawrence Hebia</a> using
              React, Axios and Firebase
            </p>
          </div>
        </div>
      </div>
    );
}

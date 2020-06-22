import React, { Component } from 'react';
import splash from './../assets/splash.png';

class Hero extends Component {
    render() {
        return (
          <div className="wrapper">
            <section className="Hero">
              <div className="Hero-image">
                <img
                  src={splash}
                  alt="Vector art of two individuals planning over a system design background"
                />
              </div>
              <div className="Hero-TextContainer">
                <h1>{this.props.siteTitle}</h1>
                <p className="Hero-quote">
                  Read, Learn, Grow.
                </p>
                <p>
                  Devstagram - made for developers - keeps your scrolling productive. 
                </p>
                <button className="btn" onClick={this.props.buttonHander}>
                  Get Started
                </button>
              </div>
            </section>
          </div>
        );
    }
}

export default Hero;
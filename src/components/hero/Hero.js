import React, { Component } from 'react';
import splash from '../../assets/splash.png';
import { Link } from "react-router-dom";

// Hero splash page to introduce user to Devcompile
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
                  Read, Learn, Grow
                </p>
                <p>
                  {this.props.siteTitle} - made for developers to help translate high-level language instructions into executable skills that they can take everywhere they go. 
                </p>
                <Link className="btn" to="/feed">
                  Get Started
                </Link>
              </div>
            </section>
          </div>
        );
    }
}

export default Hero;
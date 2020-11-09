import React, { Component } from 'react';
import mainlogo from '../../assets/mainlogo.png';
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
          <header className="Header">
            <div className="wrapper">
              <Link to="/">
                <div className="logoWrapper">
                  <img src={mainlogo} className="App-logo" alt="logo" />
                  <h2>{this.props.siteTitle}</h2>
                </div>
              </Link>
              <nav>
                <ul>
                  <li>
                    <Link to="/" className="ButtonReset">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/feed" className="ButtonReset">
                      Feed
                    </Link>
                  </li>
                  <li>
                    <Link to="/compiled" className="ButtonReset">
                      Compiled
                      <span className="SavedCounter">
                        {this.props.savedCounter}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="ButtonReset">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        );
    }
}

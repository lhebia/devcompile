import React, { Component } from 'react';
import mainlogo from './../assets/mainlogo.png';

class Header extends Component {

    render() {
        return (
          <header className="Header">
            <div className="wrapper">
              <div className="logoWrapper">
                <img
                  src={mainlogo}
                  className="App-logo"
                  alt="logo"
                  onClick={this.props.titleClickHandler}
                />
                <h2 onClick={this.props.titleClickHandler}>
                  {this.props.siteTitle}
                </h2>
              </div>
              <nav>
                <ul>
                  <li>
                    <button
                      className="ButtonReset"
                      onClick={this.props.onHomeClick}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className="ButtonReset"
                      onClick={this.props.onArticlesClick}
                    >
                      Feed
                    </button>
                  </li>
                  <li>
                    <button
                      className="ButtonReset"
                      onClick={this.props.onSavedButtonClick}
                    >
                      Compiled<span className="SavedCounter">{this.props.savedCounter}</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="ButtonReset"
                      onClick={this.props.onAboutClick}
                    >
                      About
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        );
    }
}

export default Header;
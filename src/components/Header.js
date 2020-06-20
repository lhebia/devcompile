import React, { Component } from 'react';
import logo from './../logo.svg';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            mainTitle: 'Developer Orbits'
        }
    }

    titleClickHandler = () => {
        const cohortNames = ['Cohort Orbitz', 'Dankest Cohort', `Threatened Swan's Cohort`, `Friday Colin's Cohort`, `Owen's 72 Survivors`, `Dankshana's Cohort`, `Cohort Pineapple Juice Friday's`, 'Cohort Calc(30 - 3)', `Who ate Esther's oranges?`, `Papa Colin's Cohort`];
        const randNum = Math.floor(Math.random() * cohortNames.length)
        this.setState({
            mainTitle: cohortNames[randNum]
        })
    }

    render() {
        return (
          <header className="Header">
            <div className="wrapper">
              <div className="logoWrapper">
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  onClick={this.titleClickHandler}
                />
                <h2 onClick={this.titleClickHandler}>{this.state.mainTitle}</h2>
              </div>
              <nav>
                <ul>
                  <li>
                    <button  className="ButtonReset" onClick={this.props.onHomeClick}>
                      Home
                    </button>
                  </li>
                  <li>
                    <button  className="ButtonReset" onClick={this.props.onArticlesClick}>
                      Articles
                    </button>
                  </li>
                  <li>
                    <button className="ButtonReset" >About</button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        );
    }
}

export default Header;
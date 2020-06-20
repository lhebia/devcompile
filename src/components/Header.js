import React, { Component } from 'react';
import logo from './../logo.svg';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            mainTitle: 'Dev Central'
        }
    }

    clickHandler = () => {
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
                            onClick={this.clickHandler}
                        />
                        <h1>{this.state.mainTitle}</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Articles</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;
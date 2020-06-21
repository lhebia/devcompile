import React, { Component } from 'react';
import splash from './../assets/splash.png';

class Hero extends Component {
    render() {
        return (
            <section className="Hero wrapper">
                <div className="Hero-image">
                    <img 
                        src={splash}
                        alt="Vector art of two individuals planning over a system design background"
                    />
                </div>
                <div className="Hero-TextContainer">
                    <h1>{ this.props.siteTitle }</h1>
                    <p className="Hero-quote">Leave the world, better than you found it.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias voluptates eveniet esse ducimus assumenda earum quo sunt temporibus qui dolores possimus accusamus, officia, neque quidem?</p>
                    <button className="btn" onClick={this.props.buttonHander}>Get Started</button>
                </div>
            </section>
        )
    }
}

export default Hero;
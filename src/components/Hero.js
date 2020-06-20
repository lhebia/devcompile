import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <section className="Hero wrapper">
                <div className="Hero-image">
                    <img 
                        src="https://uploads-ssl.webflow.com/5e5002f2c0906059a29fe8b9/5e789a843ea5b8630fd5a71e_00001-01-p-1080.png"
                        alt="A man works on a desk with a computer."
                    />
                </div>
                <div className="Hero-text">
                    <h2>Stay Connected on Dev Central</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias voluptates eveniet esse ducimus assumenda earum quo sunt temporibus qui dolores possimus accusamus, officia, neque quidem?</p>
                    <button className="btn" onClick={this.props.buttonHander}>Start</button>
                </div>
            </section>
        )
    }
}

export default Hero;
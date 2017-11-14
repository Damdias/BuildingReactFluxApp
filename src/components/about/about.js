"use strict"

import React from 'react';

class About extends React.Component {
    static willTransitionTo(transition, replaceWith) {
        console.log(transition);
    }
    render() {
        return (
            <div className="col-6">
                <h1>About</h1>
                <p>
                    This application use the following technologies</p>
                <ul>
                    <li> React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                    <li>{this.props.match.params.name}</li>
                </ul>
            </div>
        );
    }
}
export default About;
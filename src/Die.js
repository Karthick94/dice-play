import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <i className={`Die fa fa-dice-${this.props.face} ${this.props.rolling && 'shaking'}`}></i>
        );
    }
}

export default Die;
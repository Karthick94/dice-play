import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    state = {
        die1: 'one',
        die2: 'one',
        rolling: false
    }

    roll() {
        const newDie1 = this.getRandomValue(this.props.sides);
        const newDie2 = this.getRandomValue(this.props.sides);
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }

    getRandomValue(porpsValue) {
        return porpsValue[Math.floor(Math.random() * porpsValue.length)];
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button disabled={this.state.rolling} onClick={this.roll.bind(this)}>{this.state.rolling ? 'Rolling' : 'Roll Dice!'}</button>
            </div>
        );
    }
}

export default RollDice;

import React from "react";
import css from './Counter.module.css';


class Counter extends React.Component {
    state = {
        value: 5,
    };
    handleIncrement = () => {console.log('натиснули збільшити');};
    handleDecrement() { console.log('натиснули зменшити') };
    render() {
        return (
                <div className="Counter">
                <span className={css.counter__value}>{this.state.value}</span>
                    <div className="Counter__controls">
                        <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
                        <button type="button" onClick={this.handleDecrement}>Зменшити на 1</button>
                    </div>
                </div>
            );
    }
}

export default Counter;

import { render } from "@testing-library/react";
import React from "react";
import './Counter.css';


class Counter extends React.Component {
    handleIncrement = event => {
        console.log('натиснули збільшити');
        setTimeout(() => { console.log(event.target); }, 1000);
        setTimeout(() => { console.log(event.target); }, 2000);
};
    handleDecrement() { console.log('натиснули зменшити') };
    render() {
        return (
                <div className="Counter">
                    <span className="Counter__value">0</span>
                    <div className="Counter__controls">
                        <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
                        <button type="button" onClick={this.handleDecrement}>Зменшити на 1</button>
                    </div>
                </div>
            );
    }
}

export default Counter;


import React from "react";
import css from './Counter.module.css';
import Controls from "./Controls";


class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };
    state = {
        value: this.props.initialValue,
    };
    handleIncrement = () => {
        
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
    };
    handleDecrement= () => {
        
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        });
    };
    render() {
        return (
                <div className="Counter">
                <span className={css.counter__value}>{this.state.value}</span>
                <Controls/>
                    {/* <div className="Counter__controls">
                        <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
                        <button type="button" onClick={this.handleDecrement}>Зменшити на 1</button>
                    </div> */}
                </div>
            );
    }
}

export default Counter;

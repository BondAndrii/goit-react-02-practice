import React, { Component } from "react";
import './Dropdown.css'

class Dropdown extends Component {
    state = {
        visible: false,
    };
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };
    // show = () => {
    //     this.setState({ visible: true })
    // };
    // hide = () => {
    //     this.setState({ visible: false });
    // };
    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
                    {this.state.visible? "приховати" : "показати"}
                </button>
                {/* // <button type="button" className="Dropdown__toggle" onClick={this.hide}>
                //     Приховати
                // </button> */}
                {this.state.visible && (<div className="Dropdown__menu">Випадаюче меню</div>)}
                {/* <div className="Dropdown__menu">Випадаюче меню</div> */}
            </div>
        );
    }
}

export default Dropdown;
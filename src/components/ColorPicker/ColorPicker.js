import React, {Component} from "react";
import './ColorPicker.css'

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    };
    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <div>
                    {this.props.options.map(({ label, color }, index) => (
                        <button key={label}
                            className="ColorPicker__option"
                            style={{
                                backgroundColor: color,
                                border: index===this.state.activeOptionIdx ? '3px solid green': 'none'
                            }}>
                        </button>
                   
                    ))}
                </div>
            </div>

        );
    }
}

export default ColorPicker;
import React, {Component} from "react";
import './ColorPicker.css'

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 2 ,
    };
    setActiveIdx = index => {
        this.setState({ activeOptionIdx: index });
        // console.log(activeOptionIdx);
        
    };
    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker__option'];
                        
        if (index === this.state.activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active')
        }
        return optionClasses.join(' ');
    }
    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { label, color } = options[activeOptionIdx];
        const prevColor=options[activeOptionIdx-1];
        console.log({label});
        return (
            <div className="ColorPicker" style={{ background: color }}>
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p style={{ color: prevColor.color }}>Вибрано колір: { label}</p>
                <div>
                    {options.map(({ label, color }, index) =>                         
                        <button key={label}
                                className={this.makeOptionClassName(index)}
                                style={{backgroundColor: color}}
                                onClick={() => this.setActiveIdx(index)}
                        >       
                            </button>
                    )}
                </div>
            </div>

        );
    }
}

export default ColorPicker;
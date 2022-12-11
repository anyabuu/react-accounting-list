import React from "react";
import './Input.css';

class Input extends React.Component {

    handleChange = ( {target: {value} }) => {
        this.props.onChange(this.props.name, value);
    }

    render() {

        const {type, name, placeholder} = this.props

        return (
            <input className='form__input'
                   value={this.props.value}
                   type={type}
                   name={name}
                   placeholder={placeholder}
                   onChange = {this.handleChange}
            />
        );
    }
}

export default Input;
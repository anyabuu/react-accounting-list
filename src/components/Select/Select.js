import React from "react";
import './Select.css'

class Select extends React.Component {

    handleChange = ({target: {value}}) => {
        this.props.onChange(this.props.name, value)
    }


    render() {

        const { options = [], name } = this.props;

        return (

            <select className='form__input'
                    name={name}
                    value={this.props.value}
                    onChange = {this.handleChange}
            >
                {
                    options.map(({ value, label, disabled }) => (
                        <option key={label} disabled={disabled} value={value || label}>{label}</option>
                    ))
                }
            </select>

        );
    }
}

export default Select;
import React from "react";
import './BillForm.css'

class BillForm extends React.Component {
    render() {
        return (
            <form className='form' onSubmit={this.props.onHandleSubmit}>
                <input className='form__input'
                       value={this.props.text}
                       type='text'
                       placeholder='Description'
                       onChange = {this.props.onInputTextChange}
                />
                <div className='form__input-group'>
                    <select className='form__input'
                            name='select'
                            onChange = {this.props.onInputTypeChange}
                    >
                        <option value='income'>
                            income
                        </option>
                        <option value='extend'>
                            extend
                        </option>
                    </select>
                    <input className='form__input'
                           value={this.props.amount}
                           type='number'
                           placeholder='Amount'
                           onChange={this.props.onInputAmountChange}/>
                </div>
                <button className='form__button'>
                    Add bill
                </button>
            </form>
        );
    }
}

export default BillForm;
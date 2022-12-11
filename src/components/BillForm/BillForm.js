import React from "react";
import './BillForm.css'
import Input from "../Input/Input";
import Select from "../Select/Select";

const selectOptions = [
    {
        label: 'income',
    },
    {
        label: 'extend',
    }
]

class BillForm extends React.Component {

    state = {
        text: '',
        amount: '',
        type: 'income'
    };

    handleChange = (name, value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [name]: name === 'amount' ? +value : value,
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.preventDefault();
        const { handleAddItem } = this.props;

        if (this.state.amount === '' || this.state.type === '' || this.state.text === ''){
           return ;
        }

        handleAddItem(this.state);

        this.setState({
            text: '',
            type: 'income',
            amount: ''
        })

    }


    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    placeholder="Description"
                    name="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <div className='form__input-group'>
                    <Select
                        name="type"
                        options={selectOptions}
                        onChange={this.handleChange}
                        value={this.state.type}
                    />
                    <Input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        onChange={this.handleChange}
                        value={this.state.amount}
                    />
                </div>
                <button className='form__button'>
                    Add bill
                </button>
            </form>
        );
    }
}

export default BillForm;
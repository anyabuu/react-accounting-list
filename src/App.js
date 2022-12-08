import React from "react";
import './App.css';
import Balance from "./components/Balance/Balance";
import BillList from "./components/BillList/BillList";
import BillForm from "./components/BillForm/BillForm";

class App extends React.Component {

    state = {
        balance: 100,
        items: [],

        text: '',
        type: 'income',
        amount: '',
    }

    onInputTextChange = (e) => {
        this.setState({ text: e.target.value });
    }

    onInputAmountChange = (e) => {
        this.setState({ amount: e.target.value });
    }

    onInputTypeChange = (e) => {
        this.setState({ type: e.target.value });
    }


    onHandleSubmit = (e) => {
        e.preventDefault();

        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const yearDate = [
            day.toString().padStart(2, '0'),
            month.toString().padStart(2, '0'),
            year,
        ].join('-');

        if (this.state.text.length === 0 || this.state.amount.length === 0 || this.state.type.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            type: this.state.type,
            amount: `${this.state.amount}$`,
            date: yearDate,
            id: Date.now()
        };

        if (this.state.type === 'income'){
            this.setState({
                balance: this.state.balance + Number(this.state.amount)
            });
        }

        if (this.state.type === 'extend'){
            if (this.state.amount > this.state.balance){
                alert('You dont have enough money!')
                return
            }
            this.setState({
                balance: this.state.balance - this.state.amount,
            });
        }

        this.setState({
            items: [...this.state.items, newItem],
            text: '',
            type: this.state.type,
            amount: ''
        });
    }

  render() {
    return (
        <>
          <header className='header'>
              <div className='container header__container'>
                  <Balance balance={this.state.balance}/>
              </div>
          </header>
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        My accounting
                    </h1>
                    <BillList items={this.state.items}/>
                    <BillForm text={this.state.text} amount={this.state.amount} onHandleSubmit={this.onHandleSubmit} onInputTextChange={this.onInputTextChange} onInputTypeChange={this.onInputTypeChange} onInputAmountChange={this.onInputAmountChange}/>
                </div>
            </section>
        </>
    )
  }

}

export default App;

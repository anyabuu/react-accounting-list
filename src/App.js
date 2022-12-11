import React from "react";
import './App.css';
import Balance from "./components/Balance/Balance";
import BillList from "./components/BillList/BillList";
import BillForm from "./components/BillForm/BillForm";

class App extends React.Component {

    state = {
        balance: 100,
        items: [],
    }

    addItem = ({text, amount, type}) => {

        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const yearDate = [
            day.toString().padStart(2, '0'),
            month.toString().padStart(2, '0'),
            year,
        ].join('-');

        const newItem = {
            text: text,
            type: type,
            amount: `${amount}$`,
            date: yearDate,
            id: Date.now()
        };

        if (type === 'income'){
            this.setState(({balance}) => ({
                balance: balance + (amount)
            }));
        }

        if (type === 'extend'){
            if (this.state.amount > this.state.balance){
                alert('You dont have enough money!')
                return
            }
            this.setState(({balance}) => ({
                balance: balance - amount,
            }));
        }

        this.setState(({items}) => ({
            items: [...items, newItem],
        }));
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
                    <BillForm
                        handleAddItem={this.addItem}
                    />
                </div>
            </section>
        </>
    )
  }

}

export default App;

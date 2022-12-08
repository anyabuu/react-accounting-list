import React from "react";
import './Balance.css'

class Balance extends React.Component {
    render() {
        return (
            <p className='header__balance-text'>
                Balance: {this.props.balance}$
            </p>
        );
    }
}

export default Balance;
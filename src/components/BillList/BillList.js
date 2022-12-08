import React from "react";
import './BillList.css'

class BillList extends React.Component {

    render() {
        return (
            <ul className='list'>
                {this.props.items.map(item => (
                    <li className='list__item' key={item.id}>
                        <div className='list__item-text'>
                            {item.text}
                        </div>
                        <div className='list__item-type'>
                            {item.type}
                        </div>
                        <div className='list__item-amount'>
                            {item.amount}
                        </div>
                        <div className='list__item-date'>
                            {item.date}
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default BillList;
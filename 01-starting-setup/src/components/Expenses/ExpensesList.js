import React from 'react';

import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css";

const ExpensesList = props => {

    let expensesContent = <p>No expenses found.</p>;

    if(props.items.length === 0){
        return <h2 className='expenses-list'>Found no expenses.</h2>;
    }

  return <ul className='expenses-list'>
    {props.items.map((item) => (
        <ExpenseItem
            key={item.id} // react가 전체를 업데이트하는 성능 저하를 막기 위해 고유값을 사용
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
        ))}
  </ul>

};

export default ExpensesList;
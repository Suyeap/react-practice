import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    // const [userInput, setUserInput] = useState({ 
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    //  });
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const [enteredDate, setEnteredDate] = useState('');

    /* event의 event.target.value으로 현재값을 얻을 수 있음
       value는 늘 String으로 들어옴 */
    const titleChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }; 
        // });
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // form 양식 제출을 위해 자동으로 서버 reload하는 것을 방지
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        // reset vals
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Number</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>

      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button> {/* // type="button"이면 폼 전송x  */}
      
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

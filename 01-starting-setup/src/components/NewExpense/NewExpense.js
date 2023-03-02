import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onAddClicked = (event) => {
    let addClicked = null;
    if(event) {
     return addClicked = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
    } else {
      return addClicked = <button>Add new expense</button>;
    }
  };

  return (
    <div className="new-expense">
      <div onClick={onAddClicked}>{onAddClicked}</div>
      
    </div>
  );
};

export default NewExpense;

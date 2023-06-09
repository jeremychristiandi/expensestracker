import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAdd, setIsAdd] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdd(false);
  };

  const addHandler = () => {
    setIsAdd(true);
  };

  const notAddHandler = () => {
    setIsAdd(false);
  };

  let content;
  if (isAdd) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        stopAdd={notAddHandler}
      />
    );
  } else {
    content = <button onClick={addHandler}>Add New Expense</button>;
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;

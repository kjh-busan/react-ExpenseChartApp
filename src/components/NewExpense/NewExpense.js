import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEdtingHandler = () => {
    setIsEditing(true);
  };

  const stopEdtingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEdtingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEdtingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

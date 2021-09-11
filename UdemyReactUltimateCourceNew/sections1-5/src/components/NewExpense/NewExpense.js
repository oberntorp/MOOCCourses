import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const startEditingHandler = () => {
    setShowForm(true);
  };

  const stopEditingHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {showForm === false && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {showForm === true && (
        <ExpenseForm
          cancelEditing={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

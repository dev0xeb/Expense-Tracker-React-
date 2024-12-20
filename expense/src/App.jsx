import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import TotalExpenses from './components/TotalExpense';
import Sidebar from './components/Sidebar';
import './index.css';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [isBudgetSet, setIsBudgetSet] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSetBudget = (budget) => {
    setBudget(budget);
    setIsBudgetSet(true);
  };

  return (
    <div className="container">
      <h1>Your Expense Tracker</h1>
      <h4>Keep tab on your Expenses</h4>
      {!isBudgetSet ? (
        <BudgetForm setBudget={handleSetBudget} />
      ) : (
        <>
          <div className="main-content">
            <ExpenseForm addExpense={addExpense} />
            <Sidebar expenses={expenses} />
            <TotalExpenses expenses={expenses} budget={budget} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

import React, { useEffect } from "react";

const TotalExpenses = ({expenses, budget}) => {
    const TotalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const newBudget = budget - TotalExpenses;

    useEffect(() => {
        if (newBudget < 0) {
            alert("You have exceeded your budget!!!");
    }
}, [newBudget]);

    return (
        <div className="total-expenses">
            <h2>Total Expenses: ${TotalExpenses.toFixed(2)}</h2>
            <h2 className={newBudget < 0 ? 'negative-budget' : ''}>Remaining Budget: ${newBudget.toFixed(2)}</h2>
        </div>
    )
}

export default TotalExpenses;
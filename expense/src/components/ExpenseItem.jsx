import React from "react";

const ExpenseItem = ({expense}) => {
    return (
        <li>
            {expense.category} - ${expense.amount.toFixed(2)}
        </li>
    );
};

export default ExpenseItem;
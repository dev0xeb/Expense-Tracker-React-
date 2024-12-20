import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses}) => {
    return (
        <ul>
            {expenses.map((expense, index) => (
                <ExpenseItem key={index} expense={expense}/>
                ))}
        </ul>
    );
};

export default ExpenseList;
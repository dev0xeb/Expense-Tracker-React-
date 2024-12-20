import React, {useState} from "react";

const ExpenseForm = ({ addExpense }) => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const amountValue = parseFloat(amount);
        if(amountValue >= 0) {
            addExpense({category, amount: amountValue});
            setCategory('');
            setAmount('');
        } else {
            alert("Amount cannot be negative")
        };
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
            >
                <option value="" disabled>Select a category</option>
                <option value="Groceries">Groceries</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Education">Education</option>
                <option value="Others">Others</option>
            </select>

            <input
                type = "number"
                placeholder="Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
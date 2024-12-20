import React, {useState} from 'react';

const BudgetForm = ({setBudget}) => {
    const [budget, setBudgetInput] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        const budgetValue = parseFloat(budget);
        if(budgetValue >= 0){
            setBudget(budgetValue);
            setBudgetInput('');
        } else {
            alert('Budget cannot be negative');
        }
        setBudgetInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder='Enter your budget'
                value={budget}
                onChange={(event) => setBudgetInput(event.target.value)}
                required
            />
            <button type="submit">Set Budget</button>
        </form>
    )
}

export default BudgetForm;
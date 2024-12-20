import React, {useState} from "react";

const Sidebar = ({expenses}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleSidebar} className="sidebar-toggle">
                {isOpen ? 'Close' : 'Open'} Expenses History
            </button>
            {isOpen &&(
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index}>
                            {expense.category}: ${expense.amount.toFixed(2)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Sidebar;
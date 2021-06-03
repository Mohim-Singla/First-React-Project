import React, { useState } from 'react';
import '../UI/ExpenseForm.css'
const ExpenseForm = () => {

    const [NewTitle, setNewTitle] = useState('');
    const [NewAmount, setNewAmount] =useState('');
    const [NewDate, setNewDate] = useState('');

    const setNTitle = (event) => 
    {
        setNewTitle(event.target.value);
    };
    const setNAmount = (event) => 
    {
        setNewAmount(event.target.value);
    };
    const setNDate = (event) => 
    {
        setNewDate(event.target.value);
    };

    const SubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: NewTitle,
            amount: NewAmount,
            Date: new Date(NewDate)
        };
        console.log(expenseData);
    };
    return (

        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control" onChange={setNTitle}>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control" onChange={setNAmount}>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control" onChange={setNDate}>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;
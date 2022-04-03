import React, { useState } from "react";

export default function Form({ setExpenses }) {
  const [expense, setExpense] = useState({
    currencySelect: "",
    date: "",
    description: "",
    amount: "",
    expense: "",
  });

  function handleChange(event) {
    setExpense((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setExpenses((existingExpenses) => [...existingExpenses, expense]);
    localStorage.setItem();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="expense-form">
        <label htmlFor="Currency" className="formDescription">
          Currency
        </label>
        <select
          id="currencySelect"
          required="required"
          value={expense.currencySelect}
          onChange={handleChange}
          name="currencySelect"
        >
          <option value="">--Choose Currency--</option>
          <option value="free">Free</option>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="crypto">Crypto Currency</option>
          <option value="other">Other</option>
        </select>
        <br />

        <label htmlFor="Date" className="formDescription">
          Date
        </label>

        <input
          type="date"
          required="required"
          value={expense.date}
          name="date"
          onChange={handleChange}
        />

        <label htmlFor="expense" className="formDescription">
          Expense
        </label>
        <br />
        <input
          type="text"
          placeholder="What did you buy?"
          required="required"
          onChange={handleChange}
          value={expense.expense}
          name="expense"
        />

        <label htmlFor="amount" className="formDescription">
          Amount
        </label>

        <input
          type="text"
          placeholder="Amount"
          required="required"
          onChange={handleChange}
          value={expense.amount}
          name="amount"
        />

        <label htmlFor="comments" className="formDescription">
          Comments
        </label>

        <textarea
          placeholder="comments"
          onChange={handleChange}
          name="description"
          value={expense.description}
        />

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
}

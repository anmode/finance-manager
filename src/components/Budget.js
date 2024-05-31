// src/components/Budget.js
import React, { useState, useEffect } from "react";
import { createBudget, getBudgets } from "../api";
import "../styles/Budget.css";

const Budget = ({ token }) => {
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [budgets, setBudgets] = useState([]);

  const handleCreateBudget = async (e) => {
    e.preventDefault();
    try {
      await createBudget(token, {
        amount: parseFloat(amount),
        month: parseInt(month),
        year: parseInt(year),
      });
      alert("Budget created");
      fetchBudgets();
    } catch (error) {
      alert("Failed to create budget");
    }
  };

  const fetchBudgets = async () => {
    try {
      const response = await getBudgets(token);
      setBudgets(response.data);
    } catch (error) {
      alert("Failed to fetch budgets");
    }
  };

  useEffect(() => {
    fetchBudgets();
    console.log("token", token);
  }, [token]);

  return (
    <div className="budget-container">
      <h2>Budgets</h2>
      <form className="budget-form" onSubmit={handleCreateBudget}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in Rupee"
          required
        />
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        >
          <option value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)} required>
          <option value="">Select Year</option>
          {Array.from(
            new Array(10),
            (v, i) => new Date().getFullYear() - i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button type="submit">Add Budget</button>
      </form>
      <ul className="budget-list">
        {budgets.map((budget) => (
          <li key={budget.id} className="budget-item">
            <span className="budget-amount">₹{budget.amount.toFixed(2)}</span>
            <span className="budget-date">
              {budget.month}/{budget.year}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;

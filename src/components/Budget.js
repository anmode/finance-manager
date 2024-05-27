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
  }, [token]);

  return (
    <div>
      <h2>Budgets</h2>
      <form onSubmit={handleCreateBudget}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="number"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="Month"
          required
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          required
        />
        <button type="submit">Add Budget</button>
      </form>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            {budget.amount} - {budget.month}/{budget.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;

// src/components/Transaction.js
import React, { useState, useEffect } from "react";
import { createTransaction, getTransactions } from "../api";
import "../styles/Transaction.css";

const Transaction = ({ token }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("INCOME");
  const [categoryId, setCategoryId] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleCreateTransaction = async (e) => {
    e.preventDefault();
    try {
      await createTransaction(token, {
        amount: parseFloat(amount),
        type,
        categoryId: parseInt(categoryId),
      });
      alert("Transaction created");
      fetchTransactions();
    } catch (error) {
      alert("Failed to create transaction");
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await getTransactions(token);
      setTransactions(response.data);
    } catch (error) {
      alert("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [token]);

  return (
    <div className="transaction-container">
      <h2>Transactions</h2>
      <form className="transaction-form" onSubmit={handleCreateTransaction}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in Rupee"
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="INCOME">Income</option>
          <option value="EXPENSE">Expense</option>
        </select>
        <input
          type="number"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          placeholder="Category ID"
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <span className="transaction-amount">₹{transaction.amount}</span>
            <span
              className={`transaction-type ${transaction.type.toLowerCase()}`}
            >
              {transaction.type}
            </span>
            <span className="transaction-category">
              {transaction.category.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transaction;

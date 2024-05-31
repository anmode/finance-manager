import React, { useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import { getMonthlyReport, getCategoryReport } from "../api";
import "../styles/Dashboard.css";

const Dashboard = ({ token }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [report, setReport] = useState([]);

  const handleMonthlyReport = async () => {
    try {
      const response = await getMonthlyReport(token, month, year);
      setReport(response.data);
    } catch (error) {
      alert("Failed to fetch monthly report");
    }
  };

  const handleCategoryReport = async () => {
    try {
      const response = await getCategoryReport(token, categoryId);
      setReport(response.data);
    } catch (error) {
      alert("Failed to fetch category report");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-navigation">
        <Link to="/transactions" className="dashboard-link">
          Manage Transactions
        </Link>
        <Link to="/budgets" className="dashboard-link">
          Manage Budgets
        </Link>
      </div>
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>Categories</h2>
          <Category token={token} />
        </div>
        <div className="dashboard-section">
          <h2>Reports</h2>
          <div className="report-section">
            <h3>Monthly Report</h3>
            <input
              type="number"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="number"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={handleMonthlyReport}>Get Monthly Report</button>
          </div>
          <div className="report-section">
            <h3>Category Report</h3>
            <input
              type="number"
              placeholder="Category ID"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
            <button onClick={handleCategoryReport}>Get Category Report</button>
          </div>
          <ul className="report-list">
            {report.length > 0 ? (
              report.map((transaction) => (
                <li key={transaction.id}>
                  {transaction.amount} - {transaction.type} -{" "}
                  {transaction.category
                    ? transaction.category.name
                    : "No Category"}{" "}
                  - {new Date(transaction.date).toLocaleDateString()}
                </li>
              ))
            ) : (
              <li>No report found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

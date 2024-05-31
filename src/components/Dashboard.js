// src/components/Dashboard.js
import React from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = ({ token }) => {
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
        {/* Add more sections if needed */}
      </div>
    </div>
  );
};

export default Dashboard;

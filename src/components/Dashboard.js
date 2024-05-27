import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = ({ token }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Link to="/transactions">Manage Transactions</Link>
      <Link to="/budgets">Manage Budgets</Link>
    </div>
  );
};

export default Dashboard;

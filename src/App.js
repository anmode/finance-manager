import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Budget from "./components/Budget";

const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      console.log("hello", storedToken);
    }
    setLoading(false);
  }, []);

  if (loading) {
    // Render a loading indicator while fetching token
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          {token ? (
            <>
              <Route path="/dashboard" element={<Dashboard token={token} />} />
              <Route
                path="/transactions"
                element={<Transaction token={token} />}
              />
              <Route path="/budgets" element={<Budget token={token} />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Budget from "./components/Budget";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth setToken={setToken} />
        </Route>
        {token ? (
          <>
            <Route path="/dashboard">
              <Dashboard token={token} />
            </Route>
            <Route path="/transactions">
              <Transaction token={token} />
            </Route>
            <Route path="/budgets">
              <Budget token={token} />
            </Route>
            <Redirect to="/dashboard" />
          </>
        ) : (
          <Redirect to="/auth" />
        )}
      </Switch>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../styles/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        {isLogin ? <Login/> : <Register />}
        <button
          className="auth-toggle-button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;

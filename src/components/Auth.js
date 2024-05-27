import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../styles/Auth.css";

const Auth = ({ setToken }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <Login setToken={setToken} /> : <Register />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Auth;

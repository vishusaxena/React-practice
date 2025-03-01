import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleComponent = (type) => {
    setIsLogin(type === "login");
  };

  return (
    <div className="app">
      <div className="container">
        <div
          className="login"
          onClick={() => handleComponent("login")}
          style={{ backgroundColor: isLogin ? "lavender" : "white" }}
        >
          Login
        </div>
        <div
          className="signup"
          onClick={() => handleComponent("signup")}
          style={{ backgroundColor: isLogin ? "white" : "lavender" }}
        >
          Signup
        </div>
      </div>

      {isLogin ? (
        <div className="login-form">
          <input type="text" id="email-input" placeholder="Johndoe@gmail.com" />
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Password"
          />
          <button>Login</button>
        </div>
      ) : (
        <div className="login-form">
          <input type="text" id="name-input" placeholder="John Doe" />
          <input type="text" id="email-input" placeholder="Johndoe@gmail.com" />
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Password"
          />
          <button>Signup</button>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>Login</p>
      <form className="login-form">
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={loginData.email}
          onChange={handleLoginInputChange}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={loginData.password}
          onChange={handleLoginInputChange}
        />
        <button onClick={handleLogin}>Acces</button>
      </form>
    </div>
  );
};

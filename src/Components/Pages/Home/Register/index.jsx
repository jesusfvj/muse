import React, { useState } from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    repPassword: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerData);
  };
  const handleInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>Register</p>
      <form className="register-form">
        <input
          type="text"
          placeholder="Enter Your Name"
          name="fullName"
          value={registerData.fullName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="Email"
          value={registerData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={registerData.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Repeat Your Password"
          name="repPassword"
          value={registerData.repPassword}
          onChange={handleInputChange}
        />
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

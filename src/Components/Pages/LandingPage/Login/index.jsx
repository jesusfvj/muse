import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Context/UserContext/UserContext";
import { Button, Typography, InputWithLabel } from "../../../index";

export const Login = ({ changeLogRegister }) => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [rememberEmail, setRememberEmail] = useState(false);
  const [registerData, setRegisterData] = useState()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberEmail");
    if (storedEmail !== null) {
      setLoginData({ ...loginData, email: [storedEmail] });
    }
  }, []);

  const handleRememberEmailChange = (e) => {
    setRememberEmail(!rememberEmail);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setRegisterData(JSON.parse(localStorage.getItem("register-data")))
    if (registerData) {
      const foundUser = registerData.find((user) => {
        if (user.email == loginData.email && user.password == loginData.password) {
          return user
        }
      })
      if (foundUser) {
        login("");
        if (rememberEmail) {
          localStorage.setItem("rememberEmail", loginData.email);
        }
        navigate("/main", {
          replace: true,

        })
      }
    }
  }
const handleLoginInputChange = (e) => {
  setLoginData({ ...loginData, [e.target.name]: e.target.value });
};

return (
  <div className="flex flex-col pt-[25vh] md:pt-32 md:mt-0 md:justify-center h-full w-full 2xl:w-1/4 xl:w-5/12 lg:w-2/5 md:w-2/3 md:ml-24 px-8 gap-8 ">
    <Typography text="Login" color="primary" type="important" />
    <form className="flex flex-col gap-8">
      <InputWithLabel
        name="email"
        label="Email"
        type="text"
        value={loginData.email}
        onInputChange={handleLoginInputChange}
      />
      <InputWithLabel
        name="password"
        label="Password"
        type="password"
        value={loginData.password}
        onInputChange={handleLoginInputChange}
      />
      <div className="flex gap-4 items-center">
        <input
          name="rememberEmail"
          type="checkbox"
          onChange={handleRememberEmailChange}
          className="checkbox"
        />
        <Typography text="Remember my email?" color="primary" type="p1" />
      </div>
      <Button onClick={handleLogin} text="Log In" />
    </form>
    <div className="flex gap-5">
      <Typography text={"I don't have an account"} type="p1" />
      <p
        onClick={changeLogRegister}
        className="cursor-pointer self-end w-1/4 text-white"
      >
        Register
      </p>
    </div>
  </div>
);
};

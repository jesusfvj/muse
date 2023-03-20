import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../../../Context/UserContext/UserContext";
import { Button } from "../../../Button";
import InputWithLabel from "../../../Form";
import { Typography } from "../../../Typography";

export const Login = ({ changeLogRegister }) => {
  const { login } = useContext(UserContext)
  const [recEmail, setRecEmail] = useState(false)
  const navigate = useNavigate();


  useEffect(() => {
    const storedEmail = localStorage.getItem('recEmailMuse');
    if (storedEmail !== null) {
      setLoginData({ ...loginData, email: [storedEmail] })
    }
  }, []);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleRecEmailChange = (e) => {
    setRecEmail(!recEmail)
  }
  const handleLogin = (e) => {
    e.preventDefault();
    login('')
    navigate('/', {
      replace: true
    })
    console.log(loginData);
    if (recEmail) {
      localStorage.setItem("recEmailMuse", loginData.email)
    }
  };


  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col mt-32 md:mt-0 md:justify-center h-full w-full 2xl:w-1/4 xl:w-5/12 lg:w-2/5 md:w-2/3 md:ml-24 px-8 gap-8 ">
      <Typography text="Login" color="primary" type="important" />
      <form className="flex flex-col gap-8">
        <InputWithLabel name="email" label="Email" type="text" value={loginData.email} onInputChange={handleLoginInputChange} />
        <InputWithLabel name="password" label="Password" type="password" value={loginData.password} onInputChange={handleLoginInputChange} />
        <div className="flex gap-4 items-center">
          <Typography text="Remember my email?" color="primary" type="p1" />
          <input name="recEmail" type="checkbox" onChange={handleRecEmailChange} />
        </div>
        <Button onClick={handleLogin} text="Log In" />
      </form>
      <div className="flex gap-5">
        <Typography text={"I don't have an account"} type="p1" />
        <p onClick={changeLogRegister} className="cursor-pointer self-end w-1/4 text-white">Register</p>
      </div>
    </div>
  );
};

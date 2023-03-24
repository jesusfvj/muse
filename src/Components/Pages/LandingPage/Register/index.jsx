import React, { useEffect, useState } from "react";
import { Button, InputWithLabel, Typography } from "../../../index";

export const Register = ({ changeLogRegister }) => {
  
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    repPassword: "",
  });
  const [newData, setNewData] = useState (
    JSON.parse(localStorage.getItem("register-data")) || [] 
    )
    useEffect(() => {
      localStorage.setItem("register-data", JSON.stringify(newData) )
    }, [newData])

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerData);
    setNewData([...newData, registerData])
   
  };
  const handleInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col pt-[25vh] md:pt-32 md:mt-0 md:justify-center h-full w-full 2xl:w-1/4 xl:w-5/12 lg:w-2/5 md:w-2/3 md:ml-24 px-8 gap-8 ">
      <Typography text="Register" color="primary" type="important" />
      <form className="flex flex-col gap-8">
        <InputWithLabel name="fullName" label="Enter Your Name" type="text" value={registerData.fullName} onInputChange={handleInputChange} />
        <InputWithLabel name="email" label="Email" type="text" value={registerData.email} onInputChange={handleInputChange} />
        <InputWithLabel name="password" label="Password" type="password" value={registerData.password} onInputChange={handleInputChange} />
        <InputWithLabel name="repPassword" label=" Repeat the password" type="password" value={registerData.repPassword} onInputChange={handleInputChange} />
        <Button onClick={handleRegister} text="Register" />
      </form>
      <div className="flex gap-5">
        <Typography text={"I already have an account"} type="p1" />
        <p onClick={changeLogRegister} className="cursor-pointer self-end w-1/4 text-white">Log In!</p>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { Button, InputWithLabel, Typography } from "../../../index";

export const Register = ({ changeLogRegister }) => {
  const { register } = useUser();

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    repPassword: "",
    isArtist: false,
  });

  const handleRegister = (e) => {
    e.preventDefault();
    register(registerData);
  };
console.log(registerData)
  const handleInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col pt-[25vh] md:pt-32 md:mt-0 md:justify-center h-full w-full 2xl:w-1/4 xl:w-5/12 lg:w-2/5 md:w-2/3 md:ml-24 px-8 gap-8 ">
      <Typography text="Register" color="primary" type="important" />
      <form className="flex flex-col gap-8">
        <InputWithLabel
          name="fullName"
          label="Enter Your Name"
          type="text"
          value={registerData.fullName}
          onInputChange={handleInputChange}
        />
        <InputWithLabel
          name="email"
          label="Email"
          type="text"
          value={registerData.email}
          onInputChange={handleInputChange}
        />
        <InputWithLabel
          name="password"
          label="Password"
          type="password"
          value={registerData.password}
          onInputChange={handleInputChange}
        />
        <InputWithLabel
          name="repPassword"
          label=" Repeat the password"
          type="password"
          value={registerData.repPassword}
          onInputChange={handleInputChange}
        />
        <div className="flex items-center gap-4">
          <label htmlFor="artistCheckbox" className="text-gray-400">
            I am an artist
          </label>
          <input
            value={registerData.isArtist}
            name="role"
            type="checkbox"
            id="artistCheckbox"
            onChange={() => {
              setRegisterData({
                ...registerData,
                isArtist: !registerData.isArtist,
              });
            }}
          />
        </div>
        <Button text="Register" onClick={handleRegister} />
      </form>
      <div className="flex gap-5">
        <Typography text={"I already have an account"} type="p1" />
        <p
          onClick={changeLogRegister}
          className="cursor-pointer self-end w-1/4 text-white"
        >
          Log In!
        </p>
      </div>
    </div>
  );
};

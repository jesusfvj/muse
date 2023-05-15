import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { changePasswordData } from "../API/UserApi/UserApi";
import { Button } from "../Components";
import { Logo } from "../Components/Logo";
import { InputElement } from "../Components/Pages/Profile/Body/FormWithInput/InputElement";

export const ResetPassword = () => {
  const { token } = useParams();

  const [resetPasswordData, setResetPasswordData] = useState({
    newPassword: "",
    repeatNewPassword: "",
  });

  const handleResetPassword = (e) => {
    e.preventDefault();
    changePasswordData(
      token,
      resetPasswordData.newPassword,
      resetPasswordData.repeatNewPassword
    );
  };
  const handleChangePasswordData = (e) => {
    setResetPasswordData({
      ...resetPasswordData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="items-center h-screen bg-black bg-cover bg-left-bottom">
      <Logo extraClassesParent="absolute top-[8vh]" />
      <div className="w-screen h-screen fixed top-0 flex items-center justify-center sm:gap-6 lg:gap-16">
        <div
          className="md:w-2/3 lg:w-1/3 h-2/5 w-4/5 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] flex flex-col items-center gap-8 p-6 rounded-md place-content-center"
          onClick={(e) => e.stopPropagation()}
        >
          <InputElement
            name="newPassword"
            label="New Password"
            type="password"
            value={resetPasswordData.newPassword}
            onInputChange={handleChangePasswordData}
            
          />
          <InputElement
            name="repeatNewPassword"
            label="Repeat New Password"
            type="password"
            value={resetPasswordData.repeatNewPassword}
            onInputChange={handleChangePasswordData}
            
          />
          <div>
            <Button onClick={handleResetPassword} text="Reset Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

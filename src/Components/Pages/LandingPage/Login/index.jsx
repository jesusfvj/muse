import { useEffect, useState } from "react";
import { sendEmail } from "../../../../API/UserApi/UserApi";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { Button, Typography, InputWithLabel } from "../../../index";

export const Login = ({ changeLogRegister }) => {
  const [showError, setShowError] = useState("");
  const { login, user } = useUser();
  const token = window.localStorage.getItem("token");
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [email, setEmail] = useState("");
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

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(loginData);
    if (!response.ok) {
      setShowError(response.msg)
    }
    /* navigate("/main"); */
  };
  const handleToggleResetPasswordModal = (e) => {
    setIsResetPassword(!isResetPassword);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSendEmail = (e) => {
    e.preventDefault();
    sendEmail(email);
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
        <div
          className="flex gap-4 items-center cursor-pointer"
          onClick={handleToggleResetPasswordModal}
        >
          <Typography text="Forgot Your password?" />
        </div>
        {showError !== "" &&
          <div className="w-full flex justify-start">
            <Typography
              text={showError}
              type="p2"
              color="danger"
            />
          </div>
        }
        {user && !token &&
          <div className="w-full flex justify-start">
            <Typography
              text="Session has expired, please log in again."
              type="p2"
              color="danger"
            />
          </div>
        }
        <Button onClick={handleLogin} text="Log In" />
      </form>
      <div className="flex gap-5">
        <Typography text="I don't have an account" type="p1" />
        <p
          onClick={changeLogRegister}
          className="cursor-pointer self-end w-1/4 text-white"
        >
          Register
        </p>
      </div>
      {isResetPassword ? (
        <div
          className="flex justify-center items-center absolute top-0 left-0 h-screen w-screen backdrop-blur-md"
          onClick={handleToggleResetPasswordModal}
        >
          <div
            className="w-4/5 md:w-2/5 h-1/3 bg-gradient-to-tl from-cyan-900 to-gray-900 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <form className="w-full h-full flex flex-col items-center justify-center gap-6 rounded-md">
              <InputWithLabel
                name="email"
                label="Write your email"
                type="email"
                value={email}
                onInputChange={handleChangeEmail}
                sizeContainer="w-4/5"
              />
              <div>
                <Button text="Send Email" onClick={handleSendEmail} />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

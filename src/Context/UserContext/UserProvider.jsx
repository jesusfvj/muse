import React, { useEffect } from "react";
import { useReducer } from "react";
import { loginUser, registerUser } from "../../API/UserApi/UserApi";
import { types } from "../Types/types";
import { UserContext } from "./UserContext";
import userReducer from "./UserReducer";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    isLogged: !!user,
    user,
  };
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState.user));
  }, [userState.user]);

  const login = async (user) => {
    const response = await loginUser(user);

    if (response.length) {
      const { fullName, email } = response[0];
      dispatch({ type: types.login, payload: { email, fullName } });
    }
  };

  const register = (user) => {
    const { email, fullName } = user;
    registerUser(user);
    dispatch({ type: types.register, payload: { email, fullName } });
  };

  const logout = () => {
    dispatch({ type: types.logout });
  };

  return (
    <UserContext.Provider
      value={{
        ...userState,
        login,
        logout,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

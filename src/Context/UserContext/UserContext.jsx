import { useEffect, createContext, useReducer } from "react";
import { useContext } from "react";
import { loginUser, registerUser } from "../../API/UserApi/UserApi";
import { types } from "../Types/types";
import { userReducer } from "./UserReducer";

export const UserContext = createContext();

export const useUser = () => {
  const state = useContext(UserContext);
  return state;
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    user
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

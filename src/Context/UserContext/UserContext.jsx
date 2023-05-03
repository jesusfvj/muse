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
    user,
  };
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState.user));
  }, [userState.user]);

  const login = async (user) => {
    const data = await loginUser(user);

    if (data.ok) {
      dispatch({ type: types.login, payload: data.user });
    }
  };

  const register = async (user) => {
    const data = await registerUser(user);

    if (data.ok) {
      dispatch({ type: types.register, payload: data.user });
    } else {
      console.log("Something happened");
    }
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

import React from 'react';
import { useReducer } from 'react';
import { types } from '../Types/types';
import { UserContext } from './UserContext';
import userReducer from './UserReducer';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return  {
        isLogged:!!user,
        user 
    }
 }

export const UserProvider = ({children}) => {

    const [userState, dispatch] = useReducer(userReducer, {}, init)
    console.log(userState)


    const login = (name='') => {
        const user = {
            id: 1,
            name,
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({type: types.login, payload: user})
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: types.logout})
    
    }

  return (
    <UserContext.Provider
    value={{
        ...userState,
        login: login,
        logout: logout
    }}
  >
    {children}
  </UserContext.Provider>
  )
}

export default UserProvider;
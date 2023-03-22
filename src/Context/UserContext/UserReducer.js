import { types } from "../Types/types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        ...state,
        isLogged: false,
        user: null,
      };

    default:
      state;
  }
};

export default userReducer;
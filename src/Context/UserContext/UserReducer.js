import { types } from "../Types/types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.register:
      return {
        ...state,
        user: { ...action.payload },
      };
    case types.login:
      return {
        ...state,
        user: {...action.payload},
      };
    case types.logout:
      return {
        ...state,
        user: null,
      };

    default:
      state;
  }
};

export default userReducer;

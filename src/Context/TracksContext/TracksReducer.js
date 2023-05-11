import { types } from "../Types/types";

export const tracksReducer = (state = {}, action) => {
  switch (action.type) {
    case types.changeCurrentTrack:
      return { ...state, currentTrack: action.payload };
    default:
      state;
  }
};

export default tracksReducer;

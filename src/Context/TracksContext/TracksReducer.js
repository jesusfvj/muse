import { types } from "../Types/types";

export const tracksReducer = (state = {}, action) => {
  switch (action.type) {
    case types.changeCurrentTrack:
      return { ...state, currentTrack: action.payload };
    case types.initQueue:
      return {
        ...state,
        playerQueue: action.payload.playerQueue,
        index: action.payload.index,
      };
    case types.createQueue:
      return {
        ...state,
        playerQueue: action.payload.tracks,
        index: action.payload.index,
      };
    case types.goNextPrevSong:
      return {
        ...state,
        index: action.payload,
      };
    default:
      state;
  }
};

export default tracksReducer;

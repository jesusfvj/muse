import { createContext, useReducer } from "react";
import { useContext } from "react";

import { types } from "../Types/types";
import tracksReducer from "./TracksReducer";

export const TracksContext = createContext();

export const useTracks = () => {
  const state = useContext(TracksContext);
  return state;
};

const init = () => {
  const currentTrack = null;
  const tracksList = [];
  return {
    currentTrack,
    tracksList,
  };
};

export const TracksProvider = ({ children }) => {
  const [tracksState, dispatch] = useReducer(tracksReducer, {}, init);

  const changeCurrentTrack = (track) => {
    dispatch({ type: types.changeCurrentTrack, payload: track });
  };

  return (
    <TracksContext.Provider
      value={{
        ...tracksState,
        changeCurrentTrack,
      }}
    >
      {children}
    </TracksContext.Provider>
  );
};

export default TracksProvider;

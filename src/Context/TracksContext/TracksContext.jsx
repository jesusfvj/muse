import { createContext, useReducer, useState } from "react";
import { useContext } from "react";

import { types } from "../Types/types";
import tracksReducer from "./TracksReducer";
import { useUser } from "../UserContext/UserContext";
import { useEffect } from "react";
import { changeIndex, createQueue, initPlayer } from "../../API/PlayerApi";

export const TracksContext = createContext();

export const useTracks = () => {
  const state = useContext(TracksContext);
  return state;
};

const init = () => {
  const currentTrack = null;
  const index = 0;
  const playerQueue = [];
  return {
    currentTrack,
    playerQueue,
    index,
  };
};

export const TracksProvider = ({ children }) => {
  const [tracksState, dispatch] = useReducer(tracksReducer, {}, init);
  const { user } = useUser();

  const changeCurrentTrack = (track) => {
    dispatch({ type: types.changeCurrentTrack, payload: track });
  };

  const [currentPlayingSong, setCurrentPlayingSong] = useState(null);
  const [isMusicPlaying, setisMusicPlaying] = useState(false);

  const initQueue = async () => {
    if (user) {
      const res = await initPlayer(user?._id);
      if (res.ok) {
        dispatch({
          type: types.initQueue,
          payload: {
            playerQueue: res.user.playerQueue?.tracks || [],
            index: res.user.playerQueue?.index || 0,
          },
        });
      }
    }
  };

  useEffect(() => {
    if (user?._id) {
      initQueue();
    }
  }, [user?._id]);

  const handleCreateQueue = async (userId, trackId, index) => {
    console.log(userId, trackId);
    //trackId must be an array!
    const res = await createQueue(userId, trackId, index);

    if (res.ok) {
      dispatch({
        type: types.createQueue,
        payload: {
          tracks: [...res.playQueue.tracks],
          index: res.playQueue.index,
        },
      });
    }
  };

  //save index to db
  const handleGoNextSong = async (index, userId) => {
    const res = await changeIndex(index + 1, userId);

    if (res.ok) {
      dispatch({
        type: types.goNextPrevSong,
        payload: index + 1,
      });
    }
  };

  const handleGoPrevSong = async (index, userId) => {
    const res = await changeIndex(index - 1, userId);

    if (res.ok) {
      dispatch({
        type: types.goNextPrevSong,
        payload: index - 1,
      });
    }
  };

  return (
    <TracksContext.Provider
      value={{
        ...tracksState,
        changeCurrentTrack,
        handleCreateQueue,
        handleGoNextSong,
        handleGoPrevSong,
        currentPlayingSong,
        setCurrentPlayingSong,
        isMusicPlaying,
        setisMusicPlaying,
      }}
    >
      {children}
    </TracksContext.Provider>
  );
};

export default TracksProvider;

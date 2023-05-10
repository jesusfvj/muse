import { useEffect, createContext, useReducer } from "react";
import { useContext } from "react";
import { followUser, loginUser, registerUser } from "../../API/UserApi/UserApi";
import { types } from "../Types/types";
import { userReducer } from "./UserReducer";
import {
  createPlaylist,
  deletePlaylist,
  togglePlaylistIsPrivate,
} from "../../API/MusicApi/MusicApi";

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

  const toggleUserFollowing = async (
    loggedUserId,
    followedUserId,
    isFollowing
  ) => {
    const data = await followUser(loggedUserId, followedUserId, isFollowing);
    if (!data.ok) return;
    if (data.isFollowing) {
      dispatch({ type: types.followUser, payload: followedUserId });
    } else {
      dispatch({ type: types.unfollowUser, payload: followedUserId });
    }
  };

  const logout = () => {
    dispatch({ type: types.logout });
  };

  const createSinglePlaylist = async (formData, _id) => {
    const res = await createPlaylist(formData, _id);
    if (res.ok) {
      dispatch({ type: types.createPlaylist, payload: res.newPlaylist });
    }
    return res
  };

  const togglePlaylistVisibility = async (
    loggedUserId,
    playlistId,
    isPrivate
  ) => {
    const res = await togglePlaylistIsPrivate(
      loggedUserId,
      playlistId,
      isPrivate
    );

    const updatedPlaylistsArray = userState.user.playlists.map((playlist) => {
      if (playlist._id === playlistId) {
        return { ...playlist, isPrivate: !res.isPrivate };
      } else {
        return playlist;
      }
    });

    if (res) {
      dispatch({
        type: types.togglePlaylistVisibility,
        payload: updatedPlaylistsArray,
      });
    }
  };

  const deleteSinglePlaylist = async (loggedUserId, playlistId) => {
    const res = await deletePlaylist(loggedUserId, playlistId);
    if (res.ok) {
      const filteredPlaylists = userState.user.playlists.filter((playlist) => {
        return playlist._id !== playlistId;
      });
      dispatch({ type: types.deletePlaylist, payload: filteredPlaylists });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...userState,
        login,
        logout,
        register,
        toggleUserFollowing,
        createSinglePlaylist,
        togglePlaylistVisibility,
        deleteSinglePlaylist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

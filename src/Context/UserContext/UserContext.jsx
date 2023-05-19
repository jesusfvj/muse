import { useEffect, createContext, useReducer, useState } from "react";
import { useContext } from "react";
import {
  changeUsername,
  followUser,
  handleAddToPlaylist,
  loginUser,
  registerUser,
  updateProfileImageAPI,
  handleToggleFollowingAlbum,
  getUserById,
} from "../../API/UserApi/UserApi";
import { types } from "../Types/types";
import { userReducer } from "./UserReducer";
import {
  createPlaylist,
  deletePlaylist,
  deleteTrack,
  togglePlaylistIsPrivate,
  updatePlaylistForm,
  updateSongForm,
  deleteAlbum,
  updateAlbumForm,
  likeTracks,
} from "../../API/MusicApi/MusicApi";

export const UserContext = createContext();

export const useUser = () => {
  const state = useContext(UserContext);
  return state;
};

export const UserProvider = ({ children }) => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const init = async () => {
    setIsLoginLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const data = await getUserById(user);
      const loggedUser = data.user;
      dispatch({ type: types.login, payload: loggedUser });
    }
    setIsLoginLoading(false);
    return {
      user,
    };
  };

  const [userState, dispatch] = useReducer(userReducer, {}, init);

  const [userProfile, setUserProfile] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  useEffect(() => {
    if (userState?.user) {
      localStorage.setItem("user", JSON.stringify(userState?.user?._id));
    }
  }, [userState.user?._id]);

  const login = async (user) => {
    const data = await loginUser(user);
    if (data.ok) {
      localStorage.setItem("token", data.user.token);
      dispatch({ type: types.login, payload: data.user });
    }
    return data;
  };

  const register = async (user) => {
    const data = await registerUser(user);
    if (data.ok) {
      localStorage.setItem("token", data.user.token);
      dispatch({ type: types.register, payload: data.user });
    }
    return data;
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
    localStorage.removeItem("user");
    dispatch({ type: types.logout });
  };

  const createSinglePlaylist = async (formData, _id) => {
    const res = await createPlaylist(formData, _id);
    if (res.ok) {
      dispatch({ type: types.createPlaylist, payload: res.newPlaylist });
    }
    return res;
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

  const addToPlaylist = async (playlistId, trackId) => {
    await handleAddToPlaylist(playlistId, trackId);
  };

  const deleteSinglePlaylist = async (loggedUserId, playlistId) => {
    const res = await deletePlaylist(loggedUserId, playlistId);
    if (res.ok) {
      const filteredPlaylists = userState.user.playlists.filter((playlist) => {
        return playlist._id !== playlistId;
      });
      dispatch({ type: types.deletePlaylist, payload: filteredPlaylists });
    }
    return res;
  };

  const deleteSingleSong = async (loggedUserId, trackId) => {
    const res = await deleteTrack(loggedUserId, trackId);
    if (res.ok) {
      const filteredTracks = userState.user.tracks.filter((track) => {
        return track._id !== trackId;
      });
      dispatch({ type: types.deleteTrack, payload: filteredTracks });
    }
    return res;
  };

  const deleteSingleAlbum = async (loggedUserId, albumId) => {
    const res = await deleteAlbum(loggedUserId, albumId);
    if (res.ok) {
      const filteredAlbums = userState.user.albums.filter((album) => {
        return album._id !== albumId;
      });
      dispatch({ type: types.deleteAlbum, payload: filteredAlbums });
    }
    return res;
  };

  const updateUsername = async (newUsername, userId) => {
    const data = await changeUsername(newUsername, userId);
    if (data.ok) {
      dispatch({ type: types.updateUsername, payload: data.newUser });
    }
    return data;
  };

  const updateProfileImage = async (formData, userId) => {
    const data = await updateProfileImageAPI(formData, userId);
    if (data.ok) {
      dispatch({
        type: types.updateUserProfileImage,
        payload: data.profilePhoto,
      });
    }
    return data;
  };

  const updatePlaylist = async (formData, playlistId) => {
    const data = await updatePlaylistForm(formData, playlistId);
    if (data.ok) {
      dispatch({ type: types.updatePlaylist, payload: data.newName });
    }
    return data;
  };

  const updateAlbum = async (formData, albumId) => {
    const data = await updateAlbumForm(formData, albumId);
    if (data.ok) {
      dispatch({ type: types.updateAlbum, payload: data.newName });
    }
    return data;
  };

  const updateSong = async (formData, songId) => {
    const data = await updateSongForm(formData, songId);
    if (data.ok) {
      dispatch({ type: types.updateSong, payload: data.newName });
    }
    return data;
  };

  const toggleFollowAlbum = async (albumId, userId, isFollowed, album) => {
    const res = await handleToggleFollowingAlbum(albumId, userId, !isFollowed);

    if (res && !isFollowed) {
      const followedAlbums = userState.user.albums.push(album);
      dispatch({ type: types.toggleFollowAlbum, payload: followedAlbums });
    } else if (res) {
      const followedAlbums = userState.user.albums.filter(
        (album) => album.id !== albumId
      );
      dispatch({ type: types.toggleFollowAlbum, payload: followedAlbums });
    } else {
      console.log("Something went wrong...");
    }
  };

  //error here
  const getUserProfile = async (id) => {
    const data = await getUserById(id);
    if (data?.ok) {
      setUserProfile(data.user);
      setIsProfileLoading(false);
    } else {
      setIsProfileLoading(false);
    }
  };

  const toggleFollowTrack = async (userId, track, isFollowed) => {
    const data = await likeTracks(userId, [track._id], isFollowed);
    if (data.ok) {
      if (data.isAdded) {
        const followedTracks = [...userState.user.tracks, track._id];

        dispatch({
          type: types.toggleFollowingTrack,
          payload: followedTracks,
        });
      } else {
        const followedTracks = userState.user.tracks.filter((trk) => {
          return trk !== track._id;
        });
        dispatch({
          type: types.toggleFollowingTrack,
          payload: followedTracks,
        });
      }
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
        updateUsername,
        createSinglePlaylist,
        addToPlaylist,
        togglePlaylistVisibility,
        deleteSingleAlbum,
        deleteSinglePlaylist,
        updateProfileImage,
        updatePlaylist,
        toggleFollowAlbum,
        userProfile,
        isProfileLoading,
        getUserProfile,
        updateSong,
        deleteSingleSong,
        updateAlbum,
        toggleFollowTrack,
        isLoginLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

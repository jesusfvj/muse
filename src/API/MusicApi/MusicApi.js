import axios from "axios";
import { checkTokenExpired } from "../../Utils/tokenExpiredValidator";

const BASE_URL = "http://localhost:4000/playlist";
const BASE_URL_TRACKS = "http://localhost:4000/track";
const BASE_URL_ALBUMS = "http://localhost:4000/album";

export const getSongs = async () => {
  try {
    const res = await axios.get(BASE_URL_TRACKS, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data.tracks;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return [];
  }
};

export const getSongById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL_TRACKS}/id/${id}`, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return {
      track: res.data.track.DBtrack,
      featuredIn: res.data.track.featuredIn,
    };
  } catch (error) {
    checkTokenExpired(error.response.data)
    return [];
  }
};

export const uploadSongsAPI = async (filesFormData, userId) => {
  try {
    const res = await axios.post(
      `${BASE_URL_TRACKS}/uploadNewSongs/${userId}`,
      filesFormData, {
        headers: {
          "x-token": window.localStorage.getItem("token")
        }
      });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const getPlaylists = async () => {
  try {
    const res = await axios.get(BASE_URL, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data.playlists;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const getPlaylistsById = async (playlistId) => {
  try {
    const res = await axios.get(`${BASE_URL}/id/${playlistId}`, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data.playlist;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return null;
  }
};

export const createPlaylist = async (formData, userId) => {
  try {
    const res = await axios.post(`${BASE_URL}/create/${userId}`, formData, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const updatePlaylistForm = async (formData, playlistId) => {
  try {
    const res = await axios.put(`${BASE_URL}/update/${playlistId}`, formData, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const updateAlbumForm = async (formData, albumId) => {
  try {
    const res = await axios.put(
      `${BASE_URL_ALBUMS}/update/${albumId}`,
      formData, {
        headers: {
          "x-token": window.localStorage.getItem("token")
        }
      });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const updateSongForm = async (formData, songId) => {
  try {
    const res = await axios.put(
      `${BASE_URL_TRACKS}/update/${songId}`,
      formData, {
        headers: {
          "x-token": window.localStorage.getItem("token")
        }
      });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const togglePlaylistIsPrivate = async (
  loggedUserId,
  playlistId,
  isPrivate
) => {
  try {
    const res = await axios.put(`${BASE_URL}/togglevisibility`, {
      loggedUserId,
      playlistId,
      isPrivate,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data.playlistToUpdate;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return null;
  }
};

export const toggleFollowPlaylist = async (
  loggedUserId,
  playlistId,
  isAdded
) => {
  try {
    const res = await axios.post(`${BASE_URL}/follow`, {
      loggedUserId,
      playlistId,
      isAdded,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const duplicatePlaylist = async (loggedUserId, playlistId) => {
  try {
    const res = await axios.post(`${BASE_URL}/duplicatePlaylist`, {
      loggedUserId,
      playlistId,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const deletePlaylist = async (loggedUserId, playlistId) => {
  try {
    const res = await axios.post(`${BASE_URL}/delete`, {
      loggedUserId,
      playlistId,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const deleteAlbum = async (loggedUserId, albumId) => {
  try {
    const res = await axios.post(`${BASE_URL_ALBUMS}/delete`, {
      loggedUserId,
      albumId,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const deleteTrack = async (loggedUserId, trackId) => {
  try {
    const res = await axios.post(`${BASE_URL_TRACKS}/delete`, {
      loggedUserId,
      trackId,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const getAlbums = async () => {
  try {
    const res = await axios.get(BASE_URL_ALBUMS, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data.albums;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return [];
  }
};

export const getAlbumById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL_ALBUMS}/${id}`, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data.album;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return [];
  }
};

export const likeTracks = async (loggedUserId, trackId, isAdded) => {
  try {
    const res = await axios.post(`${BASE_URL_TRACKS}/addToLibrary`, {
      loggedUserId,
      trackId,
      isAdded,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return [];
  }
};
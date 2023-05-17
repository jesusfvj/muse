import axios from "axios";

const BASE_URL = "http://localhost:4000/playlist";
const BASE_URL_TRACKS = "http://localhost:4000/track";
const BASE_URL_ALBUMS = "http://localhost:4000/album";

export const getSongs = async () => {
  try {
    const res = await axios.get(BASE_URL_TRACKS);
    return res.data.tracks;
  } catch (error) {
    return [];
  }
};

export const getSongById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL_TRACKS}/id/${id}`);
    return {
      track: res.data.track.DBtrack,
      featuredIn: res.data.track.featuredIn,
    };
  } catch (error) {
    return [];
  }
};

export const uploadSongsAPI = async (filesFormData, userId) => {
  try {
    const res = await axios.post(
      `${BASE_URL_TRACKS}/uploadNewSongs/${userId}`,
      filesFormData
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPlaylists = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data.playlists;
  } catch (error) {
    return error.response.data;
  }
};

export const getPlaylistsById = async (playlistId) => {
  try {
    const res = await axios.get(`${BASE_URL}/id/${playlistId}`);
    return res.data.playlist;
  } catch (error) {
    return null;
  }
};

export const createPlaylist = async (formData, userId) => {
  try {
    const res = await axios.post(`${BASE_URL}/create/${userId}`, formData);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updatePlaylistForm = async (formData, playlistId) => {
  try {
    const res = await axios.put(`${BASE_URL}/update/${playlistId}`, formData);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateAlbumForm = async (formData, albumId) => {
  try {
    const res = await axios.put(
      `${BASE_URL_ALBUMS}/update/${albumId}`,
      formData
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateSongForm = async (formData, songId) => {
  try {
    const res = await axios.put(
      `${BASE_URL_TRACKS}/update/${songId}`,
      formData
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const togglePlaylistIsPrivate = async (
  loggedUserId,
  playlistId,
  isPrivate
) => {
  const res = await axios.put(`${BASE_URL}/togglevisibility`, {
    loggedUserId,
    playlistId,
    isPrivate,
  });
  try {
    return res.data.playlistToUpdate;
  } catch (error) {
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
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const duplicatePlaylist = async (loggedUserId, playlistId) => {
  try {
    const res = await axios.post(`${BASE_URL}/duplicatePlaylist`, {
      loggedUserId,
      playlistId,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deletePlaylist = async (loggedUserId, playlistId) => {
  try {
    const res = await axios.post(`${BASE_URL}/delete`, {
      loggedUserId,
      playlistId,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteAlbum = async (loggedUserId, albumId) => {
  try {
    const res = await axios.post(`${BASE_URL_ALBUMS}/delete`, {
      loggedUserId,
      albumId,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteTrack = async (loggedUserId, trackId) => {
  try {
    const res = await axios.post(`${BASE_URL_TRACKS}/delete`, {
      loggedUserId,
      trackId,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAlbums = async () => {
  try {
    const res = await axios.get(BASE_URL_ALBUMS);
    return res.data.albums;
  } catch (error) {
    return [];
  }
};

export const getAlbumById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL_ALBUMS}/${id}`);
    return res.data.album;
  } catch (error) {
    return [];
  }
};

export const likeTracks = async (loggedUserId, trackId, isAdded) => {
  try {
    const res = await axios.post(`${BASE_URL_TRACKS}/addToLibrary`, {
      loggedUserId,
      trackId,
      isAdded,
    });
    return res.data;
  } catch (error) {
    return [];
  }
};
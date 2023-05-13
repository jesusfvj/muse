import axios from "axios";

const BASE_URL = "http://localhost:4000/playlist";
const BASE_URL_TRACKS = "http://localhost:4000/track";
const BASE_URL_ALBUMS = "http://localhost:4000/album";

export const getSongs = async () => {
  const res = await axios.get(BASE_URL_TRACKS);
  // throw new Error();
  if (res.data.ok) {
    return res.data.tracks;
  } else {
    return [];
  }
};

export const getSongById = async (id) => {
  const res = await axios.get(`${BASE_URL_TRACKS}/id/${id}`);
  // throw new Error();
  if (res.data.ok) {
    return {
      track: res.data.track.DBtrack,
      featuredIn: res.data.track.featuredIn,
    };
  } else {
    return [];
  }
};

export const uploadSongsAPI = async (filesFormData, userId) => {
  const response = await axios.post(`${BASE_URL_TRACKS}/uploadNewSongs/${userId}`, filesFormData);
  /* const okData = checkTokenExpired(response);
  return okData && data; */
  return response;
}

export const getPlaylists = async () => {
  const res = await axios.get(BASE_URL);
  // throw new Error();
  if (res.data.ok) {
    return res.data.playlists;
  }
};

export const getPlaylistsById = async (playlistId) => {
  const res = await axios.get(`${BASE_URL}/id/${playlistId}`);
  // throw new Error();
  if (res.data.ok) {
    return res.data.playlist;
  } else {
    return null;
  }
};

export const createPlaylist = async (formData, userId) => {
  const res = await axios.post(`${BASE_URL}/create/${userId}`, formData);
  return res.data;
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
    const res = await axios.put(`${BASE_URL_ALBUMS}/update/${albumId}`, formData);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateSongForm = async (formData, songId) => {
  try {
    const res = await axios.put(`${BASE_URL_TRACKS}/update/${songId}`, formData);
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

  if (res.data.ok) {
    return res.data.playlistToUpdate;
  } else {
    return null;
  }
};

export const toggleFollowPlaylist = async (
  loggedUserId,
  playlistId,
  isAdded
) => {
  const res = await axios.post(`${BASE_URL}/follow`, {
    loggedUserId,
    playlistId,
    isAdded,
  });
  return res.data;
};
export const duplicatePlaylist = async (loggedUserId, playlistId) => {
  const res = await axios.post(`${BASE_URL}/duplicatePlaylist`, {
    loggedUserId,
    playlistId,
  });
  return res.data;
};

export const deletePlaylist = async (loggedUserId, playlistId) => {
  const res = await axios.post(`${BASE_URL}/delete`, {
    loggedUserId,
    playlistId,
  });
  return res.data;
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
  const res = await axios.get(BASE_URL_ALBUMS);
  //   throw new Error();

  if (res.data.ok) {
    return res.data.albums;
  } else {
    return [];
  }
};

export const getAlbumById = async (id) => {
  const res = await axios.get(`${BASE_URL_ALBUMS}/${id}`);
  //   throw new Error();

  if (res.data.ok) {
    return res.data.album;
  } else {
    return [];
  }
};

export const likeTracks = async (
  loggedUserId,
  trackId,
  isAdded) => {
  const res = await axios.post(`${BASE_URL_TRACKS}/addToLibrary`, {
    loggedUserId,
    trackId,
    isAdded
  });
  //   throw new Error();

  if (res.data.ok) {
    return res.data.albums;
  } else {
    return [];
  }
};
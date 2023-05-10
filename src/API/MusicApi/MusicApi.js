import axios from "axios";

const BASE_URL = "http://localhost:4000/playlist";

export const getSongs = async () => {
  const res = await fetch("http://localhost:3000/tracks");
  // throw new Error();
  return res.json();
};

export const getAlbums = async () => {
  const res = await fetch("http://localhost:3000/albums");
  //   throw new Error();
  return res.json();
}; 

/////PLAYLISTS FETCH
/////PLAYLISTS FETCH
/////PLAYLISTS FETCH

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

export const createPlaylist = async (playlist, userId) => {
  const res = await axios.post(`${BASE_URL}/create`, { playlist, userId });
  return res.data;
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

export const toggleFollowPlaylist = async (loggedUserId, playlistId, isAdded) => {
  const res = await axios.post(`${BASE_URL}/follow`, { loggedUserId, playlistId, isAdded });
  return res.data;
};
export const duplicatePlaylist = async (loggedUserId, playlistId) => {
  const res = await axios.post(`${BASE_URL}/duplicatePlaylist`, { loggedUserId, playlistId } );
  return res.data;
};

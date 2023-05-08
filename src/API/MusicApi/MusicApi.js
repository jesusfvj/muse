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

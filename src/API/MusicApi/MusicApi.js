export const getSongs = async () => {
  const res = await fetch("http://localhost:3000/tracks");
  return res.json();
};
export const getArtists = async () => {
  const res = await fetch("http://localhost:3000/artists");
  return res.json();
};
export const getAlbums = async () => {
  const res = await fetch("http://localhost:3000/albums");
  return res.json();
};
export const getPlaylists = async () => {
  const res = await fetch("http://localhost:3000/playlists");
  return res.json();
};

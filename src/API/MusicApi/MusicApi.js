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
  const res = await fetch("http://localhost:3000/playlists");
  // throw new Error();
  return res.json();
};

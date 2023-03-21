export const getSongs = async () => {
  const res = await fetch("http://localhost:3000/tracks");
  return res.json();
};

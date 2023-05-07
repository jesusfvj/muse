import axios from "axios";

const BASE_URL = "http://localhost:4000/user";

export const registerUser = async (user) => {
  const res = await axios.post(`${BASE_URL}/register`, user);
  return res.data;
};
export const loginUser = async (user) => {
  const res = await axios.post(`${BASE_URL}/login`, user);
  return res.data;
};

export const followUser = async (loggedUserId, followedUserId, isFollowing) => {
  const res = await axios.post(`${BASE_URL}/followUser`, {
    loggedUserId,
    followedUserId,
    isFollowing,
  });
  return res.data;
};

export const getUserById = async (userId) => {
  const res = await axios.get(`${BASE_URL}/${userId}`);
  if (res.data.ok) {
    return res.data;
  }
};

export const getArtists = async (id) => {
  const res = await axios.get(`${BASE_URL}/artists/${id}`);
  console.log(res.data);
  if (res.data?.ok) {
    return res.data.artists;
  }
};

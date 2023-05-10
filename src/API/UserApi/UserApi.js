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
  if (res.data?.ok) {
    return res.data.artists;
  }
};

export const changeUsername = async (newUsername, userId) => {
  const data = await fetch("http://localhost:4000/user/update-username", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: newUsername,
      userId: userId,
    }),
  })
    .then((response) => {
      return response.json();
    }).then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error.message);
    });
  return data
}
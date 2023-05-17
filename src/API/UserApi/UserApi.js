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
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: newUsername,
      userId: userId,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.message);
    });
  return data;
};
export const getFollowedUsers = async (id) => {
  const res = await axios.get(`${BASE_URL}/followedusers/${id}`);
  if (res.data?.ok) {
    return res.data.users;
  } else {
    return [];
  }
};

export const getArtistById = async (id) => {
  const res = await axios.get(`${BASE_URL}/artist/${id}`);

  //   throw new Error();
  if (res.data.ok) {
    return res.data.artist;
  } else {
    return null;
  }
};

export const handleAddToPlaylist = async (playlistId, trackId) => {
  const res = await axios.post(`${BASE_URL}/playlist/addtrack`, {
    playlistId,
    trackId,
  });

  //   throw new Error();
  if (res.data.ok) {
    return res.data;
  } else {
    return null;
  }
};

export const updateProfileImageAPI = async (formData, userId) => {
  const res = await axios.put(
    `${BASE_URL}/uploadProfileImage/${userId}`,
    formData
  );
  return res.data;
};

export const handleToggleFollowingAlbum = async (
  albumId,
  userId,
  isFollowed
) => {
  const res = await axios.put(`${BASE_URL}/toggleFollowPlaylist`, {
    albumId,
    userId,
    isFollowed,
  });

  if (res.data.ok) {
    return res.data.ok;
  } else {
    return false;
  }
};

export const sendEmail = async (email) => {
  const res = await axios.post(`${BASE_URL}/resetpassword`, {
    email,
  });
};
export const changePasswordData = async (
  token,
  newPassword,
  repeatNewPassword
) => {
  const res = await axios.post(`${BASE_URL}/resetpasswordchange`, {
    token,
    newPassword,
    repeatNewPassword,
  });
};

export const updateUserPassword = async (userId, newPassword, confirmPassword) => {
  console.log(userId, newPassword, confirmPassword)
  try {
    const res = await axios.post(`${BASE_URL}/resetpasswordprofile`, {
      userId,
      newPassword,
      confirmPassword
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
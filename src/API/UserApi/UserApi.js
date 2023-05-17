import axios from "axios";

const BASE_URL = "http://localhost:4000/user";

export const registerUser = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, user);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, user);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const followUser = async (loggedUserId, followedUserId, isFollowing) => {
  try {
    const res = await axios.post(`${BASE_URL}/followUser`, {
      loggedUserId,
      followedUserId,
      isFollowing,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserById = async (userId) => {
  try {
    const res = await axios.get(`${BASE_URL}/${userId}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }

};

export const getArtists = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/artists/${id}`);
    return res.data.artists;
  } catch (error) {
    return error.response.data;
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
  try {
    const res = await axios.get(`${BASE_URL}/followedusers/${id}`);
    return res.data.users;
  } catch (error) {
    return [];
  }
};

export const getArtistById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/artist/${id}`);
    return res.data.artist;
  } catch (error) {
    return null;
  }
};

export const handleAddToPlaylist = async (playlistId, trackId) => {
  try {
    const res = await axios.post(`${BASE_URL}/playlist/addtrack`, {
      playlistId,
      trackId,
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const updateProfileImageAPI = async (formData, userId) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/uploadProfileImage/${userId}`,
      formData
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const handleToggleFollowingAlbum = async (
  albumId,
  userId,
  isFollowed
) => {
  try {
    const res = await axios.put(`${BASE_URL}/toggleFollowPlaylist`, {
      albumId,
      userId,
      isFollowed,
    });
    return res.data.ok;
  } catch (error) {
    return false;
  }
};

export const sendEmail = async (email) => {
  try {
    const res = await axios.post(`${BASE_URL}/resetpassword`, {
      email,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const changePasswordData = async (
  token,
  newPassword,
  repeatNewPassword
) => {
  try {
  const res = await axios.post(`${BASE_URL}/resetpasswordchange`, {
    token,
    newPassword,
    repeatNewPassword,
  });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
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
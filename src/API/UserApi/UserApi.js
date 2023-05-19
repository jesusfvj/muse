import axios from "axios";
import { checkTokenExpired } from "../../Utils/tokenExpiredValidator";

const BASE_URL = "https://muse-back-production.up.railway.app/user";

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
    return error.message;
  }
};

export const followUser = async (loggedUserId, followedUserId, isFollowing) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/followUser`,
      {
        loggedUserId,
        followedUserId,
        isFollowing,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return error.response.data;
  }
};

export const getUserById = async (userId) => {
  try {
    const res = await axios.get(`${BASE_URL}/${userId}`, {
      headers: {
        "x-token": window.localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return error.response.data;
  }
};

export const getArtists = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/artists/${id}`, {
      headers: {
        "x-token": window.localStorage.getItem("token"),
      },
    });
    return res.data.artists;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return error.response.data;
  }
};

export const changeUsername = async (newUsername, userId) => {
  const data = await fetch(`${BASE_URL}/update-username`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": window.localStorage.getItem("token"),
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
      console.log(error);
      checkTokenExpired(error.response.data);
    });
  return data;
};

export const getFollowedUsers = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/followedusers/${id}`, {
      headers: {
        "x-token": window.localStorage.getItem("token"),
      },
    });
    return res.data.users;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return [];
  }
};

export const getArtistById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/artist/${id}`, {
      headers: {
        "x-token": window.localStorage.getItem("token"),
      },
    });
    return res.data.artist;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return null;
  }
};

export const handleAddToPlaylist = async (playlistId, trackId) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/playlist/addtrack`,
      {
        playlistId,
        trackId,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return null;
  }
};

export const updateProfileImageAPI = async (formData, userId) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/uploadProfileImage/${userId}`,
      formData,
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return error.response.data;
  }
};

export const handleToggleFollowingAlbum = async (
  albumId,
  userId,
  isFollowed
) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/toggleFollowPlaylist`,
      {
        albumId,
        userId,
        isFollowed,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return res.data.ok;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return false;
  }
};

export const sendEmail = async (email) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/resetpassword`,
      {
        email,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return error.response.data;
  }
};

export const changePasswordData = async (
  token,
  newPassword,
  repeatNewPassword
) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/resetpasswordchange`,
      {
        token,
        newPassword,
        repeatNewPassword,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return error.response.data;
  }
};

export const updateUserPassword = async (
  userId,
  newPassword,
  confirmPassword
) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/resetpasswordprofile`,
      {
        userId,
        newPassword,
        confirmPassword,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data);
    return null;
  }
};

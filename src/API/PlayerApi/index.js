import axios from "axios";
import { checkTokenExpired } from "../../Utils/tokenExpiredValidator";

const BASE_URL = "https://muse-back-production.up.railway.app/queue";

export const initPlayer = async (userId) => {
  try {
    const res = await axios.get(`https://muse-back-production.up.railway.app/user/${userId}`, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const createQueue = async (userId, trackId, index = 0) => {
  try {
    const res = await axios.post(`${BASE_URL}/createQueue`, {
      userId,
      trackId,
      index,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const changeIndex = async (index, userId) => {
  try {
    const res = await axios.post(`${BASE_URL}/index`, {
      index,
      userId
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};

export const playNext = async (index, tracksToAdd, userId) => {
  try {
    const res = await axios.post(`${BASE_URL}/addToQueue`, {
      index,
      tracksToAdd,
      userId,
    }, {
      headers: {
        "x-token": window.localStorage.getItem("token")
      }
    });
    return res.data.playQueue.tracks;
  } catch (error) {
    checkTokenExpired(error.response.data)
    return error.response.data;
  }
};
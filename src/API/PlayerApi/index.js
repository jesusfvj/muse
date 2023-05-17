import axios from "axios";

const BASE_URL = "http://localhost:4000/queue";

export const initPlayer = async (userId) => {
  const res = await axios.get(`http://localhost:4000/user/${userId}`);
  if (res.data.ok) {
    return res.data;
  }
};

export const createQueue = async (userId, trackId, index = 0) => {
  const res = await axios.post(`${BASE_URL}/createQueue`, {
    userId,
    trackId,
    index,
  });

  if (res.data.ok) {
    return res.data;
  }
};

export const changeIndex = async (index, userId) => {
  const res = await axios.post(`${BASE_URL}/index`, { index, userId });
  if (res.data.ok) {
    return res.data;
  }
};

export const playNext = async (index, tracksToAdd, userId) => {
  const res = await axios.post(`${BASE_URL}/addToQueue`, {
    index,
    tracksToAdd,
    userId,
  });
  if (res.data.ok) {
    return res.data.playQueue.tracks;
  }
};

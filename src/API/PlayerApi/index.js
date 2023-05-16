import axios from "axios";

const BASE_URL = "http://localhost:4000/queue";

export const initPlayer = async (userId) => {
  const res = await axios.get(`http://localhost:4000/user/${userId}`);
  if (res.data.ok) {
    return res.data;
  }
};

export const createQueue = async (userId, trackId) => {
  const res = await axios.post(`${BASE_URL}/createQueue`, { userId, trackId });

  if (res.data.ok) {
    return res.data;
  }
};

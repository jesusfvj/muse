import axios from "axios";

const BASE_URL = "http://localhost:4000/search";

export const search = async (query, uid) => {
  const res = await axios.get(`${BASE_URL}/${query}/${uid}`);
  return res.data;
};

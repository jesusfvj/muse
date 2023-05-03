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


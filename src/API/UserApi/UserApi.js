import axios from "axios";

const BASE_URL = "http://localhost:4000/user";

export const registerUser = async (user) => {
  const res = await axios.post(`${BASE_URL}/register`, user);
  return res;
};
export const loginUser = async (user) => {
  console.log(user);
  const res = await axios.post(`${BASE_URL}/login`, user);
  return res;
};


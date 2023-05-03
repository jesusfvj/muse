import axios from "axios";

const BASE_URL = "http://localhost:4000/user";

export const registerUser = async (user) => {
  const res = await axios.post(`${BASE_URL}/register`, user);
  return res;
};

export const loginUser = async (user) => {
  const { email, password } = user;
  const res = await fetch(
    `http://localhost:3000/user?email=${email}&password=${password}`
  );
  const data = await res.json();
  return data;
};

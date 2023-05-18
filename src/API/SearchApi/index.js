import axios from "axios";
import { checkTokenExpired } from "../../Utils/tokenExpiredValidator";

const BASE_URL = "https://muse-back-production.up.railway.app/search";

export const search = async (query, uid) => {
  try {
    const res = await axios.get(`${BASE_URL}/${query}/${uid}`, {
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
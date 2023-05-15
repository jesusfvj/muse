import axios from "axios";

const BASE_URL = "http://localhost:4000/admin";

export const getUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/getUsers`);
        console.log(res)
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
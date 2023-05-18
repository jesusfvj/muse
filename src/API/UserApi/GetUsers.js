import { checkTokenExpired } from "../../Utils/tokenExpiredValidator";

export const getUsers = async () => {
    try {
        const res = await axios.get("http://localhost:3000/users", {
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
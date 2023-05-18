import axios from "axios";
import { checkTokenExpired } from "../../Utils/tokenExpiredValidator";
const BASE_URL = "https://muse-back-production.up.railway.app/stripe";

export const setStripe = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/setStripe`, {
            headers: {
                "Content-Type": "application/json",
                "x-token": window.localStorage.getItem("token")
            }
        });
        return res.data;
    } catch (error) {
        checkTokenExpired(error.response.data)
        return [];
    }
}

export const stripePayment = async () => {
    try {
        const res = await axios.post(`${BASE_URL}/stripePayment`, {
            headers: {
                "Content-Type": "application/json",
                "x-token": window.localStorage.getItem("token")
            }
        });
        return res.data;
    } catch (error) {
        checkTokenExpired(error.response.data)
        return [];
    }
}
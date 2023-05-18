import axios from "axios";
import { checkTokenExpired } from "../../Utils/tokenExpiredValidator";

const BASE_URL = "http://localhost:4000/admin";

export const getCollection = async (collection, role = null) => {
    try {
        const res = await axios.post(`${BASE_URL}/getCollection`, {
            collection,
            role
        }, {
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

export const toggleBanAsset = async (collection, assetId, banTheAsset) => {
    try {
        const res = await axios.post(`${BASE_URL}/toggleBanAsset`, {
            collection,
            assetId,
            banTheAsset
        }, {
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

export const getSearchElement = async (value) => {
    try {
        const res = await axios.post(`${BASE_URL}/getSearchElement`, {
            value
        }, {
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
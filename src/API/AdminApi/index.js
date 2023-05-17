import axios from "axios";

const BASE_URL = "http://localhost:4000/admin";

export const getCollection = async (collection, role=null) => {
    try {
        const res = await axios.post(`${BASE_URL}/getCollection`, {collection, role});
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const toggleBanAsset = async (collection, assetId, banTheAsset) => {
    try {
        const res = await axios.post(`${BASE_URL}/toggleBanAsset`, {collection, assetId, banTheAsset});
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getSearchElement = async (value) => {
    try {
        const res = await axios.post(`${BASE_URL}/getSearchElement`, {
            value
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
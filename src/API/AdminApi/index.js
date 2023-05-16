import axios from "axios";

const BASE_URL = "http://localhost:4000/admin";

export const getUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/getUsers`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getArtists = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/getArtists`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getPlaylists = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/getPlaylists`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getAlbums = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/getAlbums`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getSongs = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/getSongs`);
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
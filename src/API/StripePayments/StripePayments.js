import axios from "axios";
const BASE_URL = "http://localhost:4000/stripe";

export const setStripe = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/setStripe`, {
            headers: { "Content-Type": "application/json" }
        });

            return res.data;
        
    } catch (error) {
        // Manejar el error aquí
        console.error(error);
        return [];
    }
}
export const stripePayment = async () => {
    try {
        const res = await axios.post(`${BASE_URL}/stripePayment`, {
            headers: { "Content-Type": "application/json" }
        });

            return res.data;
        
    } catch (error) {
        // Manejar el error aquí
        console.error(error);
        return [];
    }
}
import axios from "axios";


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
    }
});

//List of all endpoints
export const sendOtp = (data) => api.post('/api/send-otp', data);

export default api;



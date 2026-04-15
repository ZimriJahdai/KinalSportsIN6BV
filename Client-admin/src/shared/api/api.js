import axios from "axios";

const axiosAuth = axios.create({
    baseURL: import.meta.env.VITE_AUTH_URL,
    timeout: 8000,
    headers: {
        "Content-Type": "application/json"
    }
})

axios.interceptors.request.use(config => {
  config_axiosClient = "auth"
    const token = localStorage.getState("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;  
})


export { axiosAuth }
import axios from "axios";

const api_albumdegeladeira = axios.create({
    baseURL: "http://localhost:3333"
});

export default api_albumdegeladeira;
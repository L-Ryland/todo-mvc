import axios from "axios"

const server = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: document.URL,
  timeout: 3000,
});

export default server;
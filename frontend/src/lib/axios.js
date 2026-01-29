import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api", // backend base URL
  withCredentials: true,               // allow cookies to be sent
});

export default api;

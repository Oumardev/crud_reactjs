import axios from "axios";

// Axios instance
const apiInstance = axios.create({
  baseURL:  `http://localhost:3000`,
  timeout: 11000,
});

export default apiInstance;
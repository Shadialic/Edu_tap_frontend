import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const userData = JSON.parse(localStorage.getItem("userData"));
let token;

if (userData) {
  token = userData.token;
}

axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response error:", error.response);
    return Promise.reject(error);
  }
);

// Export axios instance if needed
// const UserApi = axios.create({
//   baseURL: "http://localhost:3000",
// });

export default axios;

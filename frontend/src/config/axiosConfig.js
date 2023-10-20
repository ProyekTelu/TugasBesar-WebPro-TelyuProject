import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const token = localStorage.getItem("token");
if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;

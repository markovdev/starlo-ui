import axios from "axios";
// axios.defaults.headers.common["X-XSRF-TOKEN"] =
//   localStorage.getItem("CSRFTokena");
const instance = axios.create({
  // baseURL: "https://www.api.markovdev.com/api/v1",
  baseURL: "https://api.starlo.markovdev.com/api/v1",
  // baseURL: "http://127.0.0.1/api/v1",
});

export default instance;

import axios from "axios";

let Api = axios.create({
  //baseURL: "https://demotuukri.softscandic.com/",
  baseURL: "http://127.0.0.1:8000/",
  //withCredentials: true
});

Api.defaults.withCredentials = true;

export default Api;
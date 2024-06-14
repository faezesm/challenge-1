import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 1500,
});

export const https = {
  get: Axios.get,
  post: Axios.post,
};

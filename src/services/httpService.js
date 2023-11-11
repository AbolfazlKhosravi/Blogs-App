import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DUMAIN_API_URL,
  withCredentials:true
});

const http = {
  get: app.get,
  delete: app.delete,
  put: app.put,
  post: app.post,
};
export default http;

import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_CRUD_CRUD + "/nutemployee",
});

export default Api;

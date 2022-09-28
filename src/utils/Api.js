import axios from "axios";
axios.defaults.baseURL="http://localhost:8080/api/v1";
export const searchApi = (q) => axios.get(`/search?q=${q}`);
export const registerApi=(data)=>axios.post("/signup",data);
export const userApi=()=>axios.get("userById");
export const AddPostApi = (data) =>axios.post("/post/add", data);
export const allPostApi=()=>axios.get("/post");
export const updatePostByIdApi = (id, data) => axios.patch(`/post/${id}`, data);
export const userByIdApi = () => axios.get("/userById");
export const categoryApi = (category, student) =>
  axios.get(
    `/category?${category ? `category=${category}` : ""}${student ? `&student=${student}`:""}`
  );
export const getpostByApi = (id)=>axios.get(`/post/${id}`);
export const loginApi = (data) => axios.post("/login", data);

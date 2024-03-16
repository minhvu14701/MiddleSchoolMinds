import axios from "axios";
import { env } from "../others/constaint.js";
console.log(env);
const { API_URL } = env;
axios.defaults.baseURL = API_URL;

//login
export async function login(data) {
  try {
    return await axios.post("api/user/login", data, { withCredentials: true });
  } catch (err) {
    console.log(err);
  }
}
export async function register(data) {
  try {
    return await axios.post("api/user/register", data);
  } catch (err) {
    console.log(err);
  }
}
//other
export async function subject() {
  try {
    return await axios.get("api/other/subject");
  } catch (err) {
    console.log(err);
  }
}
export async function listClass() {
  try {
    return await axios.get("api/other/class");
  } catch (err) {
    console.log(err);
  }
}
//exam

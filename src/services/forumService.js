import axios from "axios";
import { env } from "../others/constaint.js";
console.log(env);
const { API_URL } = env;
axios.defaults.baseURL = API_URL;
export async function getQuestion() {
  try {
    return await axios.get("api/quesAns/question");
  } catch (err) {
    console.log(err);
  }
}
export async function addQuestion(data) {
  try {
    return await axios.post("api/quesAns/addQuestion", data);
  } catch (err) {
    console.log(err);
  }
}

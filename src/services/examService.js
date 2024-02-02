import axios from "axios";
import { env } from "../others/constaint.js";
console.log(env);
const { API_URL } = env;
axios.defaults.baseURL = API_URL;

export async function getExamUser(data, accessToken, axiosJWT) {
  try {
    return await axiosJWT.post("api/exam/examUser", data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (err) {
    console.log(err);
  }
}
export async function takeExamUser(data, accessToken, axiosJWT) {
  try {
    return await axiosJWT.post("api/exam/question", data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (err) {
    console.log(err);
  }
}

//redis lấy thời gian
export async function getTimeRedis(data) {
  try {
    return await axios.post("api/exam/getTime", data);
  } catch (err) {
    console.log(err);
  }
}
//redis set thời gian
export async function setTimeRedis(data) {
  try {
    return await axios.post("api/exam/setTime", data);
  } catch (err) {
    console.log(err);
  }
}
//Lấy kết quả điểm sau khi thi xong
export async function getPointExam(data) {
  try {
    return await axios.post("api/exam/getPoint", data);
  } catch (err) {
    console.log(err);
  }
}
//redis lưu đáp án
// export async function saveAnswers(data) {
//   try {
//     return await axios.post("api/exam/saveAnswer", data);
//   } catch (err) {
//     console.log(err);
//   }
// }
//redis lấy đáp án đã lưu
// export async function getAnswers(data) {
//   try {
//     return await axios.post("api/exam/getAnswer", data);
//   } catch (err) {
//     console.log(err);
//   }
// }

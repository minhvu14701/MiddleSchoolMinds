import { defineStore } from "pinia";
import { getQuestion, addQuestion } from "../services/forumService";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useUserStore } from "@/stores/UserStore";
//JWT
let axiosJWT = axios.create();
const refreshToken = async () => {
  try {
    const res = await axios.post(
      "api/user/refresh",
      {},
      {
        withCredentials: true, //thêm cookie
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
//Trước khi gửi request thì check những thứ trong interceptors trước
axiosJWT.interceptors.request.use(
  async (config) => {
    let date = new Date();
    const store = useUserStore();
    const user = store.user;
    const { addUserToken } = useUserStore();
    const decodedToken = jwtDecode(user?.accessToken);
    if (decodedToken.exp < date.getTime() / 1000) {
      const data = await refreshToken();
      const refreshUser = {
        ...user,
        accessToken: data.accessToken,
      };
      addUserToken(refreshUser);
      config.headers["token"] = "Bearer " + data.accessToken;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getListQues = defineStore("question", {
  state: () => ({
    questions: [],
  }),
  getters: {},
  actions: {
    async fetchQuestion() {
      try {
        this.questions = (await getQuestion()).data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
export const addQuestions = defineStore("addQues", {
  state: () => ({
    addQues: "",
  }),
  getters: {},
  actions: {
    async fetchAddQuestion(data) {
      try {
        this.addQues = (await addQuestion(data)).data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

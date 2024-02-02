import {
  getExamUser,
  takeExamUser,
  getPointExam,
  getTimeRedis,
} from "../../services/examService";
import axios from "axios";
import { defineStore } from "pinia";
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

export const getExamStore = defineStore({
  id: "ExamStore",
  state: () => ({
    exams: [],
  }),
  getters: {},
  actions: {
    async fetchExamUser(data, accessToken) {
      try {
        this.exams = (await getExamUser(data, accessToken, axiosJWT)).data;
      } catch (error) {
        this.error = error;
      }
    },
  },
});
export const takeExamStore = defineStore({
  id: "takeExamStore",
  state: () => {
    return {
      questions: [],
    };
  },
  getters: {
    getData: (state) => state.questions.data,
  },
  actions: {
    async fetchTakeExamUser(data, accessToken) {
      try {
        this.questions = [];
        this.questions = (await takeExamUser(data, accessToken, axiosJWT)).data;
      } catch (error) {
        this.error = error;
      }
    },
  },
});

//Lấy thời gain sau khi thi
export const getExamTimeStore = defineStore({
  id: "GetExamTime",
  state: () => ({
    timeExam: [],
  }),
  getters: {
    getTime: (state) => state.timeExam.data.time,
  },
  actions: {
    async fetchExamTime(data) {
      try {
        this.timeExam = await getTimeRedis(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

//Lấy điểm sau khi thi
export const getExamPointStore = defineStore({
  id: "GetExamPoint",
  state: () => ({
    pointUser: [],
  }),
  getters: {},
  actions: {
    async fetchExamPoint(data) {
      try {
        this.pointUser = (await getPointExam(data)).data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

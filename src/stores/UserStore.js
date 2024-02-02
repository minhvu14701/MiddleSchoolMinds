import { defineStore } from "pinia";
import { login, register } from "../services/api.js";
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: [],
    };
  },
  getters: {
    getRefreshToken(state) {
      return state.user.refreshToken;
    },
    getToken(state) {
      return state.user.accessToken;
    },
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async addUser(data) {
      try {
        this.user = (await login(data)).data;
      } catch (error) {
        this.error = error;
      }
    },
    addUserToken(data) {
      this.user = data;
    },
    logout() {
      localStorage.clear();
    },
  },
  //lưu trữ dữ liệu vào bộ nhớ cục bộ của trình duyệt
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["user"] }],
  },
});
export const registerStore = defineStore("register", {
  state: () => ({
    result: null,
  }),
  getters: {},
  actions: {
    async fetchRegister(data) {
      try {
        this.result = (await register(data)).data;
      } catch (error) {
        this.error = error;
      }
    },
  },
});

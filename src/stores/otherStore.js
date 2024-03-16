import { defineStore } from "pinia";
import { subject, listClass } from "../services/api";

export const getSubject = defineStore("subject", {
  state: () => {
    return {
      subjects: [],
      listClass: [],
    };
  },
  getters: {},
  actions: {
    async fetchSubject() {
      try {
        this.subjects = (await subject()).data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchClass() {
      try {
        this.listClass = (await listClass()).data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

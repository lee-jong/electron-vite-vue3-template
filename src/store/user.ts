import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    email: "",
  }),
  actions: {
    fetchInfo(val: string) {
      this.email = val;
    },
  },
});

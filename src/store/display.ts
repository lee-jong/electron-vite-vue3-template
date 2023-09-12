import { defineStore } from "pinia";

export const useDisplayStore = defineStore({
  id: "display",
  state: () => ({
    /**
     * @data size
     * @md : < 1550
     * @lg : > 1550
     */
    size: "sm",
  }),
  actions: {
    setSize(type: "md" | "lg") {
      this.size = type;
    },
  },
});

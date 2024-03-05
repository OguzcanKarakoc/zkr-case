import { defineStore } from "pinia";

export const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    active: false,
  }),
  actions: {
    startLoading() {
      this.active = true;
    },
    finishLoading() {
      this.active = false;
    },
  },
});

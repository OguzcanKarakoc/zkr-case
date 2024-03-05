import { defineStore } from 'pinia';

export const useSnackbarStore = defineStore({
  id: 'snackbar',
  state: () => ({
    visible: false,
    message: '',
    timeout: 2000,
    color: 'error', // You can customize this color based on your requirements
  }),
  actions: {
    showSnackbar(message: string) {
      this.visible = true;
      this.message = message;
    },
    hideSnackbar() {
      this.visible = false;
      this.message = '';
    },
  },
});

import { defineStore } from 'pinia';
import { Countries, fetchCountries } from '@/apis/RestContriesApi';

export const useCountriesStore = defineStore({
  id: 'countries',
  state: () => ({
    loading: false,
    countries: [] as Countries[],
  }),
  actions: {
    async fetchCountries() {
      this.loading = true;
      try {
        // Check if countries are already cached
        if (this.countries.length === 0) {
          this.countries = await fetchCountries();
        }
      } finally {
        this.loading = false;
      }
    },
  },
});

<template>
  <v-card class="mx-auto" rounded="xl">
    <v-card-item class="pt-8 px-8">
      <v-card-title class="text-wrap" tag="h2">Countries</v-card-title>
      <v-card-subtitle class="text-wrap" tag="p">
        <v-icon class="me-1 pb-1" icon="mdi-information" size="18"></v-icon>
        Find information about countries
      </v-card-subtitle>
    </v-card-item>

    <v-card-item class="px-8 pb-8">
      <v-text-field
        v-model="countryName"
        placeholder="Enter country name"
        label="Country Name"
        class="pt-2"
        variant="outlined"
      />

      <v-skeleton-loader v-if="loading" type="table" height="300px">
      </v-skeleton-loader>
      <v-table height="300px" hover v-else>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredCountries" :key="item.name.common">
            <td class="w-auto">
              <v-img
                :src="item.flags.png"
                width="30"
                height="30"
                contain
              ></v-img>
            </td>
            <td class="w-100">
              <v-btn
                variant="plain"
                class="px-0"
                append-icon="mdi-chevron-right"
                :to="{
                  name: '/countries/[country]',
                  params: { country: item.name.common },
                }"
              >
                {{ item.name.common }}
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useCountriesStore } from "../store/countries";

const countriesStore = useCountriesStore();
const countryName = ref("");

onMounted(() => {
  countriesStore.fetchCountries();
});

const loading = computed(() => countriesStore.loading);
const filteredCountries = computed(() => {
  return countriesStore.countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(countryName.value.toLowerCase());
  });
});
</script>

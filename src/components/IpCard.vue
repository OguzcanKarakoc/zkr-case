<template>
  <v-card class="mx-auto ga-4 d-flex flex-column" rounded="xl">
    <v-card-item class="pt-8 px-8">
      <v-card-title tag="h2">IP</v-card-title>

      <v-card-subtitle class="text-wrap" tag="p">
        <v-icon class="me-1 pb-1" icon="mdi-web" size="18"></v-icon>
        making use of the IpApi
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="px-8">
      <v-skeleton-loader
        v-if="loading"
        type="table"
        height="300px"
      ></v-skeleton-loader>
      <v-list v-else-if="ipData">
        <v-list-item>
          <v-list-item-title>IP</v-list-item-title>
          <v-list-item-subtitle>{{ ipData.ip }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Country</v-list-item-title>
          <v-list-item-subtitle>{{ ipData.country_name }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useSnackbarStore } from "../store/snackbar";
import { IpData, fetchClientIp } from "@/apis/IpApi";

const snackbarStore = useSnackbarStore();

const loading = ref(false);
const ipData = ref<IpData | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await fetchClientIp();
    ipData.value = response;
  } catch (error) {
    snackbarStore.showSnackbar("Failed to fetch IP data");
  } finally {
    loading.value = false;
  }
});
</script>

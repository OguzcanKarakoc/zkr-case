<template>
  <v-container class="ma-10 mx-auto">
    <v-row>
      <v-col>
        <v-btn :to="{ path: '/' }"> Go back </v-btn>
      </v-col>
      <v-col>
        <div>
          {{ countryName }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const countryName = route.params.country as string;

const loading = ref(false);

const fetchCountry = async () => {
  loading.value = true;
  try {
    // fetch single country based on the country name
  } finally {
    loading.value = false;
  }
};
</script>

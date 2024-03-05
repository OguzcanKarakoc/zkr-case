<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="city"
      placeholder="Enter city name"
      label="City Name"
      :rules="[required]"
      class="pt-2"
      variant="outlined"
    />

    <div class="d-flex justify-center w-100">
      <v-btn
        :loading="loading"
        :disabled="!valid"
        variant="outlined"
        rounded
        :ripple="false"
        class="mx-auto"
        type="submit"
        >Check weather</v-btn
      >
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { WeatherData, fetchWeather } from "@/apis/WeatherApi";

const emit = defineEmits<{
  (e: "submit", data: WeatherData): void;
  (e: "error", error: unknown): void;
}>();

const valid = ref(false);
const loading = ref(false);
const city = ref("Rotterdam");

onMounted(async () => {
  await handleSubmit();
});

const handleSubmit = async () => {
  if (!valid.value) return;

  try {
    loading.value = true;
    const response = await fetchWeather(city.value);
    emit("submit", response);
  } catch (error) {
    emit("error", error);
  } finally {
    loading.value = false;
  }
};

function required(v: any) {
  return !!v || "Field is required";
}
</script>

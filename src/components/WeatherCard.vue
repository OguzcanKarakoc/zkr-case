<template>
  <v-card class="mx-auto" rounded="xl">
    <v-card-item class="pt-8 px-8">
      <v-card-title tag="h2">Weather</v-card-title>

      <v-card-subtitle class="text-wrap" tag="p">
        <v-icon class="me-1 pb-1" icon="mdi-weather-sunny" size="18"></v-icon>
        making use of the openweathermap api
      </v-card-subtitle>
    </v-card-item>

    <weather-form
      class="mb-4 px-8 pt-8"
      @submit="handleSubmit"
      @error="handleError"
    />
    <v-card-text class="px-8 pb-0">
      <template v-if="weather">
        <h3 class="text-wrap mt-4" tag="h3">
          <v-icon
            class="me-1 pb-1"
            color="primary"
            icon="mdi-map-marker"
            size="18"
          ></v-icon>
          {{ weather.name }} {{ weather.sys.country }}
        </h3>

        <v-container class="px-0">
          <v-row align="center" no-gutters>
            <v-col class="text-h4" cols="8">
              {{ weather.main.temp }}&deg;C
            </v-col>

            <v-col cols="4" v-if="weather?.weather[0].icon">
              <v-img
                class="float-end"
                height="64"
                width="64"
                contain
                :src="`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>

        <div class="d-flex py-4 justify-space-between px-0">

          <div>
            <v-icon class="me-1 pb-1" icon="mdi-weather-windy" size="25"></v-icon>
            {{ weather.wind.speed }} m/s
          </div>

          <div>
            {{ weather.main.humidity }}
            <v-icon class="me-1 pb-1" icon="mdi-water-percent" size="25"></v-icon>
          </div>
        </div>

        <v-expand-transition>
          <div v-if="expand">
            <v-list>
              <v-list-item
                v-for="item in weather.weather"
                :key="item.id"
                class="px-8"
                :subtitle="item.description"
                color="primary"
                variant="plain"
                :title="item.main"
              >
                <template #append>
                  <v-img
                    height="24"
                    width="24"
                    contain
                    :src="`https://openweathermap.org/img/wn/${item.icon}@4x.png`"
                  ></v-img>
                </template>
              </v-list-item>
            </v-list>
          </div>
        </v-expand-transition>

        <v-divider></v-divider>

        <v-card-actions class="justify-center pb-8">
          <v-btn @click="expand = !expand" rounded>
            {{ !expand ? "Show" : "Hide" }}
          </v-btn>
        </v-card-actions>
      </template>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { WeatherData } from "@/apis/WeatherApi";
import { useSnackbarStore } from "@/store/snackbar";

const snackbarStore = useSnackbarStore();

const weather = ref<WeatherData | null>(null);

const handleSubmit = (data: WeatherData) => {
  weather.value = data;
};

const handleError = () => {
  weather.value = null;
  snackbarStore.showSnackbar("City not found");
};

const expand = ref(false);
</script>

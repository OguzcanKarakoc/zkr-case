<template>
  <v-card class="mx-auto ga-4 d-flex flex-column" rounded="xl">
    <v-card-item class="pt-8 px-8">
      <v-card-title tag="h2">Pokemon</v-card-title>

      <v-card-subtitle class="text-wrap" tag="p">
        <v-icon class="me-1 pb-1" icon="mdi-pokeball" size="18"></v-icon>
        making use of the pokeapi
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="px-8">
      <pokemon-form @submit="handleSubmit" @error="handleError" />

      <div v-if="pokemonData" class="d-flex justify-center flex-column mt-4">
        <v-img
          :src="pokemonData.sprites.front_default"
          :alt="pokemonData.name"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Pokemon } from "@/apis/PokemonApi";
import { useSnackbarStore } from "../store/snackbar";

const snackbarStore = useSnackbarStore();

const pokemonData = ref<any>(null);

const handleSubmit = (data: Pokemon) => {
  pokemonData.value = data;
};

const handleError = () => {
  pokemonData.value = null;
  snackbarStore.showSnackbar("Pokemon not found");
};
</script>

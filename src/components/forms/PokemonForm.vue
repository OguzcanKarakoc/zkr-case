<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="pokemonName"
      class="mb-2"
      placeholder="Enter Pokemon Name"
      :readonly="loading"
      :rules="[required]"
      label="Pokemon Name"
      clearable
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
        >Search</v-btn
      >
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Pokemon, fetchPokemon } from "@/apis/PokemonApi";

const emit = defineEmits<{
  (e: "submit", data: Pokemon): void;
  (e: "error", error: unknown): void;
}>();

const valid = ref(false);
const loading = ref(false);
const pokemonName = ref<string | null>(null);
const pokemonData = ref<any>(null);

const handleSubmit = async () => {
  if (!valid.value) return;

  try {
    loading.value = true;
    const response = await fetchPokemon(
      pokemonName.value?.toLowerCase() as string
    );
    emit("submit", response);
  } catch (error) {
    pokemonData.value = null;
    emit("error", error);
  } finally {
    loading.value = false;
  }
};

function required(v: any) {
  return !!v || "Field is required";
}
</script>

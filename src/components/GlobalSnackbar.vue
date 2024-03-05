<template>
  <v-snackbar v-model="snackbarStore.visible" :color="color" variant="flat" :timeout="snackbarStore.timeout">{{ message }}</v-snackbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSnackbarStore } from '@/store/snackbar';

const snackbarStore = useSnackbarStore();

const message = computed(() => snackbarStore.message);
const color = computed(() => snackbarStore.color);
</script>

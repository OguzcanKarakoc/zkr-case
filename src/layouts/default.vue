<template>
  <v-app>
    <!-- <DefaultBar /> -->
    <v-progress-linear
      v-show="loadingStore.active"
      color="primary"
      indeterminate

    ></v-progress-linear>
    <DefaultView />
  </v-app>
</template>

<script lang="ts" setup>
// import DefaultBar from './default/AppBar.vue'
import { useLoadingStore } from "@/store/loading";
import DefaultView from "./default/View.vue";

const loadingStore = useLoadingStore();
</script>

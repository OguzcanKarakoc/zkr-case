<template>
  <div class="d-flex align-center ga-4 align-stretch">
    <v-progress-circular
      :color="color"
      :model-value="percentage"
      :size="size"
      :width="width"
    ></v-progress-circular>
    <div class="d-flex flex-column justify-space-between">
      <span :class="`text-h4 text-${color}`">{{ percentage }}% </span>
      <span v-if="text" class="text-body-2 text-grey-darken-2">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  percentage: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: Number,
    default: 65,
  },
  width: {
    type: Number,
    default: 5,
  },
  text: {
    type: String,
  },
});
</script>

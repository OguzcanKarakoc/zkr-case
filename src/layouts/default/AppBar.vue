<template>
  <v-app-bar flat>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

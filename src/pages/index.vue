<template>
  <v-container class="ma-10 mx-auto">
    <v-row>
      <v-col md="4" sm="6" cols="12">
        <info-card />
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <pokemon-card />
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <ip-card />
      </v-col>
      <v-col sm="6" cols="12">
        <weather-card />
      </v-col>
      <v-col sm="6" cols="12">
        <rest-countries-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import IpCard from "@/components/IpCard.vue";
import PokemonCard from "@/components/PokemonCard.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import RestCountriesCard from "@/components/RestCountriesCard.vue";
import InfoCard from "@/components/InfoCard.vue";
</script>

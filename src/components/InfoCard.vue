<template>
  <v-card class="mx-auto" rounded="xl">
    <v-card-item class="px-8 pt-8">
      <v-card-title tag="h2">
        Dossiers with organisations from high-risk countries
      </v-card-title>
    </v-card-item>

    <v-card-text class="px-8">
      <progress-circle
        class="mb-8"
        :percentage="percentage"
        text="Of all dossiers"
      />

      <p class="text-body-2 text-grey-darken-2">Latest dossiers</p>
      <v-list density="compact" :lines="false">
        <v-list-item
          v-for="link in links"
          :key="link.id"
          variant="text"
          class="px-0 text-body-1 text-grey-lighten-1"
        >
          <template #prepend>
            <v-icon icon="mdi-chevron-right" :size="18"></v-icon>
          </template>

          <template #default>
            <a
              :href="link.route"
              target="_blank"
              class="text-body-1 text-grey-lighten-1"
              >{{ link.text }}</a
            >
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-card-actions class="px-8 pb-8 justify-end">
      <v-btn
        tag="a"
        color="primary"
        variant="plain"
        append-icon="mdi-chevron-right"
        href="https://okarakoc.nl"
        >See all</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const percentage = ref(55);

const links = ref([
  { id: 1, text: "Edgars UX test dossier", route: "https://okarakocasdasd.nl" },
  { id: 2, text: "Het Koninkrijk Belgie", route: "https://okarakoc.nl" },
  { id: 3, text: "Demo concernrelaties", route: "https://okarakoc.nl" },
]);
</script>

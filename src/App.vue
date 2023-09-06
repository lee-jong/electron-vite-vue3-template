<template>
  <v-app>
    <v-main>
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from "./components/Layout/Header.vue";
</script>

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

console.log("window width", window.innerWidth, window.outerWidth);
console.log("window height", window.innerHeight, window.outerHeight);
</script>

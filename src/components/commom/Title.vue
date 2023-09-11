<script setup lang="ts">
interface title {
  text: string;
}
const props = withDefaults(defineProps<title>(), {
  text: "",
});
</script>

<template>
  <div class="d-flex">
    <div v-html="text" />
    <v-icon class="ml-2" icon="mdi-alert-circle-outline" />
  </div>
</template>

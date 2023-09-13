<script setup lang="ts">
interface title {
  text: string;
  tooltip: string;
}
const props = withDefaults(defineProps<title>(), {
  text: "",
  tooltip: "Tooltip",
});
</script>

<template>
  <div class="d-flex">
    <div class="font-g18 font-weight-medium" v-html="text" />
    <div>
      <v-icon class="ml-2" icon="mdi-alert-circle-outline" />
      <v-tooltip activator="parent">{{ props.tooltip }}</v-tooltip>
    </div>
  </div>
</template>

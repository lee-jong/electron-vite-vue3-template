<script setup lang="ts">
import Robot from "./Robot.vue";
import Camera from "./Camera.vue";
import Chatbot from "./Chatbot.vue";
</script>
<template>
  <div class="section relative d-flex">
    <Robot />
    <Camera />
    <Chatbot />
  </div>
</template>

<style scoped lang="scss">
.section {
  position: relative;
}
</style>

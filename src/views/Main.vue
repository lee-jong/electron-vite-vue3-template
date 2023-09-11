<script setup lang="ts">
import Rtsp from "../components/Rtsp.vue";
import Info from "../components/Info.vue";
import Controller from "../components/Controller.vue";
</script>

<template>
  <div class="container">
    <div class="d-flex boxs">
      <div class="boxs">
        <Rtsp />
        <Controller />
      </div>
      <Info />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.boxs {
  width: 100%;
  height: 100%;
}
</style>

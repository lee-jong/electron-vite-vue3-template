<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
const player = ref<any>(null);
const url = "ws://localhost:9999";

onMounted(() => {
  player.value = new window.JSMpeg.Player(url, {
    canvas: canvas.value,
    autoplay: true,
    onPlay: () => {
      console.log("play");
    },
    onPause: () => {
      console.log("pause");
    },
  });
});

onUnmounted(() => {
  console.log("destory emo");
  player.value.destroy();
});
</script>

<template>
  <div class="section d-flex justify-center">
    <div class="rtsp-view">
      <canvas ref="canvas" id="canvas" />
    </div>
  </div>
</template>

<style scoped>
.section {
  background-color: gray;
}

.rtsp-view {
  background-color: black;
  aspect-ratio: 16 / 9;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>

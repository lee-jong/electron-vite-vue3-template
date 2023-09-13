<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useDisplayStore } from "../store/display";

import Controller from "../components/controller/index.vue";
import Rtsp from "../components/Rtsp.vue";
import Info from "../components/Info.vue";
import Menu from "../components/commom/Menu.vue";
import SwitchController from "../components/controller/Switch.vue";

const displayStore = useDisplayStore();
const minDisplay = computed(() => displayStore.size == "md");
const fullScreen = computed(() => displayStore.fullScreen);

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

const handleResize = (e?: UIEvent) => {
  const width = window.innerWidth;
  switch (true) {
    case width < 1550:
      displayStore.fetchSize("md");
      break;
    case width >= 1550:
      displayStore.fetchSize("lg");
      break;
  }
};

// init
handleResize();
</script>

<template>
  <div class="container">
    <div class="d-flex fill">
      <div class="d-flex flex-column fill-width">
        <Rtsp
          class="rtsp fill-height"
          :class="minDisplay && !fullScreen ? 'width-60' : 'fill-width '"
        />
        <div v-if="!fullScreen" class="mt-3">
          <Controller />
        </div>
        <div v-else class="mt-3 absolute bottom-0">
          <SwitchController />
        </div>
      </div>
      <div v-if="!minDisplay && !fullScreen" class="width-40">
        <Info />
      </div>
      <div v-if="minDisplay || fullScreen" class="absolute right-0">
        <Menu
          className="info-menu"
          icon="mdi-view-headline"
          transition="slide-x-reverse-transition"
        >
          <Info class="pt-15" />
        </Menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: calc(100% - 104px);
}

.fill {
  width: 100%;
  height: 100%;
}
</style>

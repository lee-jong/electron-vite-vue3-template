<script setup lang="ts">
import { onMounted, computed } from "vue";
import Rtsp from "../components/Rtsp.vue";
import Info from "../components/Info.vue";
import Controller from "../components/Controller.vue";
import { useDisplayStore } from "../store/display";

const displayStore = useDisplayStore();
const minDisplay = computed(() => displayStore.size == "md");

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

const handleResize = (e?: UIEvent) => {
  const width = window.innerWidth;
  switch (true) {
    case width < 1550:
      displayStore.setSize("md");
      break;
    case width >= 1550:
      displayStore.setSize("lg");
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
        <Rtsp class="rtsp" :class="minDisplay ? 'width-65' : ''" />
        <Controller class="mt-3" />
      </div>
      <div v-if="!minDisplay" class="width-35">
        <Info />
      </div>
      <v-menu v-else transition="slide-x-reverse-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" size="60" color="black" style="z-index: 2001">
            <v-icon icon="mdi-view-headline" size="40" />
          </v-btn>
        </template>
        <v-list>
          <Info class="pt-15" />
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: calc(100% - 104px);
}

.rtsp {
  aspect-ratio: 16 / 9;
}

.fill {
  width: 100%;
  height: 100%;
}

main {
  width: 60%;
}

.test {
  position: absolute !important;
  top: 0px !important;
  right: 0px !important;
}
</style>

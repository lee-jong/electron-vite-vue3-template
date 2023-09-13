<script setup lang="ts">
import { computed } from "vue";
import { useDisplayStore } from "../../store/display";
const displayStore = useDisplayStore();
const fullScreenYn = computed(() => displayStore.fullScreen);

const handleFullScreen = (yn: boolean) => {
  displayStore.fetchFullScreen(yn);
};
</script>

<template>
  <div class="d-flex justify-space-between pa-10">
    <div class="d-flex">
      <v-icon icon="icons:logo" />
      <div>원격 관람 프로그램</div>
      <v-icon icon="mdi-alert-circle-outline" />
    </div>
    <div>
      <div>[ 남은 시간 : 119분 59초 ]</div>
    </div>
    <div v-if="!fullScreenYn">
      <div @click="handleFullScreen(true)">전체 화면 보기</div>
    </div>
    <div>
      <div v-if="!fullScreenYn">종료하기</div>
      <div v-if="fullScreenYn" @click="handleFullScreen(false)">
        전체 화면 종료
      </div>
    </div>
  </div>
</template>

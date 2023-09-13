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
  <div class="header d-flex justify-space-between align-center px-3">
    <div class="d-flex align-center">
      <v-icon icon="icons:logo" size="60" />
      <div class="font-g24 font-weight-bold ml-1">원격 관람 프로그램</div>
      <v-icon class="ml-1" icon="mdi-alert-circle-outline" />
    </div>
    <div>
      <div class="font-g24 font-weight-bold">[ 남은 시간 : 119분 59초 ]</div>
    </div>
    <div v-if="!fullScreenYn">
      <div class="font-g24 font-weight-bold" @click="handleFullScreen(true)">
        전체 화면 보기
      </div>
    </div>
    <div>
      <div class="font-g24 font-weight-bold" v-if="!fullScreenYn">종료하기</div>
      <div
        class="font-g24 font-weight-bold"
        v-if="fullScreenYn"
        @click="handleFullScreen(false)"
      >
        전체 화면 종료
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 102px;
}
</style>

<script setup lang="ts">
import Title from "../../components/commom/Title.vue";
</script>

<template>
  <div class="group d-flex flex-column ml-15">
    <Title text="[카메라 제어]" />
    <div class="zoom d-flex justify-space-between mt-10">
      <div v-for="icon in ['plus', 'minus']" :key="icon">
        <v-icon class="ml-2" :icon="`mdi-${icon}-circle`" size="60" />
      </div>
    </div>
    <div class="camera-controller">
      <div>
        <div v-for="idx in 4" :class="`camera-btn_${idx}`" :key="idx">
          <v-icon class="ml-2" icon="mdi-arrow-up-bold" size="40" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.group {
  position: relative;
  width: 300px;

  .zoom {
    position: absolute;
    width: 100%;
    top: 0px;
  }

  .camera-controller {
    width: 300px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .camera-controller > div {
    width: 150px;
    height: 150px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 10px;
    transform: rotate(45deg);
  }

  .camera-controller > div > div {
    border-radius: 10% 10% 90% 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
  }
  .camera-btn_1 {
    transform: rotate(-45deg);
  }

  .camera-btn_2 {
    transform: rotate(45deg);
  }

  .camera-btn_3 {
    transform: rotate(225deg);
  }

  .camera-btn_4 {
    transform: rotate(135deg);
  }
}
</style>

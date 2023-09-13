<script setup lang="ts">
import Title from "../../components/commom/Title.vue";
</script>

<template>
  <div class="group d-flex flex-column">
    <Title text="[로봇 자세 제어]" />
    <div class="robot-controller d-flex align-center mt-10">
      <div class="robot-right-btn d-flex justify-center">
        <v-icon icon="mdi-reply mt-4" size="60" />
      </div>
      <div class="divider-y" />
      <div class="robot-left-btn d-flex justify-center">
        <v-icon icon="mdi-reply mt-4" size="60" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.group {
  padding: 10px 30px;
}
.robot-controller {
  background-color: gray;
  border-radius: 150px 150px 0 0;
  width: 250px;
  height: 150px;

  div {
    width: 50%;

    &:last-child {
      transform: scaleX(-1);
    }
  }
}
</style>

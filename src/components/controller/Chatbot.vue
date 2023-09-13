<script setup lang="ts">
import Title from "../../components/commom/Title.vue";
</script>

<template>
  <div class="group d-flex flex-column">
    <Title text="[로봇과 대화 하기]" />
    <textarea class="mt-4" />
    <div class="d-flex justify-end mt-2">
      <div>질문하기</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.group {
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  padding: 10px;
  textarea {
    background-color: gray;
    height: 100px;
  }
}
</style>

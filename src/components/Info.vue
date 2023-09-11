<script setup lang="ts">
import Title from "../components/commom/Title.vue";
</script>
<template>
  <div class="section">
    <!-- 로봇 메시지 -->
    <div>
      <Title text="[로봇 메시지]" />
      <div>
        <textarea class="textarea_1" disabled>ads</textarea>
      </div>
    </div>
    <!-- 전시해설 선택 버튼 -->
    <div>
      <Title class="mt-10" text="[추천 전시물 전체 해설 듣기]" />
      <div class="d-flex mt-4">
        <div
          class="rounded-pill d-flex justify-space-center bg-purple text-white px-4 py-2"
        >
          <div>전체해설듣기</div>
        </div>
        <div
          class="rounded-pill d-flex justify-space-center bg-purple text-white px-4 py-2 ml-2"
        >
          <div>해설듣기취소</div>
        </div>
      </div>
    </div>
    <!-- 전시해설 듣기 -->
    <div>
      <Title class="mt-10" text="[선택한 전시물 개별 해설 듣기]" />
      <div class="d-flex">
        <textarea class="textarea_2" disabled>ads</textarea>
        <div
          class="rounded-pill d-flex justify-space-center bg-purple text-white ml-2 mt-16"
        >
          전시물 선택
        </div>
      </div>
      <div class="d-flex mt-4">
        <div
          class="rounded-pill d-flex justify-space-center bg-purple text-white px-4 py-2 ml-2"
        >
          목적지 이동하기
        </div>
        <div
          class="rounded-pill d-flex justify-space-center bg-purple text-white px-4 py-2 ml-2"
        >
          목적지 이동하기
        </div>
        <div
          class="rounded-pill d-flex justify-space-center bg-purple text-white px-4 py-2 ml-2"
        >
          목적지 이동하기
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 30%;
  height: 100%;
  padding: 0 30px;
}

.textarea_1 {
  margin-top: 20px;
  width: 100%;
  background-color: gray;
  height: 200px;
}

.textarea_2 {
  width: 70%;
  height: 100px;
  background-color: gray;
  margin-top: 20px;
}
</style>

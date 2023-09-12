<script setup lang="ts">
import Title from "../components/commom/Title.vue";
</script>
<template>
  <div class="section relative d-flex ml-15">
    <!-- 1 -->
    <div class="group_1 d-flex flex-column">
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
    <!-- 2 -->
    <div class="group_2 d-flex flex-column ml-15">
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
    <!-- 3 -->
    <div class="group_3 d-flex flex-column ml-15">
      <Title text="[로봇과 대화 하기]" />
      <textarea class="mt-4" />
      <div class="d-flex justify-end mt-2">
        <div>질문하기</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  position: relative;
  height: calc(30% - 52px);
}

.robot-controller {
  background-color: gray;
  border-radius: 200px 200px 0 0;
  width: 300px;
  height: 200px;

  div {
    width: 50%;

    &:last-child {
      transform: scaleX(-1);
    }
  }
}

.group_2 {
  position: relative;
  width: 350px;

  .zoom {
    position: absolute;
    width: 100%;
    top: 0px;
  }

  .camera-controller {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .camera-controller > div {
    width: 200px;
    height: 200px;
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

.group_3 {
  textarea {
    background-color: gray;
    width: 400px;
    height: 150px;
  }
}
</style>

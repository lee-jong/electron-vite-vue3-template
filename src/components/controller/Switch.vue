<script setup lang="ts">
import Menu from "../commom/Menu.vue";
import RobotController from "./Robot.vue";
import CameraController from "./Camera.vue";
import ChatbotController from "./Chatbot.vue";
</script>

<template>
  <div class="d-flex">
    <Menu
      className="controll-switch"
      icon="mdi-account-convert-outline"
      transition="v-slide-x-reverse-transition"
    >
      <RobotController />
    </Menu>
    <Menu
      className="controll-switch"
      icon="mdi-camera-enhance-outline"
      transition="v-slide-x-reverse-transition"
    >
      <CameraController />
    </Menu>
    <Menu
      className="controll-switch"
      icon="mdi-chat"
      transition="v-slide-x-reverse-transition"
    >
      <ChatbotController />
    </Menu>
  </div>
</template>

<style scoped lang="scss"></style>

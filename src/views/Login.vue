<script setup lang="ts">
import { ref } from "vue";
import { emailValid, pwValid } from "../util/validation";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import TextField from "../components/commom/TextField.vue";
import Dialog from "../components/commom/Dialog.vue";

const router = useRouter();
const userStore = useUserStore();

const userInfo = ref({
  email: "",
  pw: "",
});

const dialog = ref({
  open: false,
  content: "",
});

const login = () => {
  const testId = "test@naver.com";
  const testPw = "123123123a";

  const { email, pw } = userInfo.value;
  if (email !== testId) {
    dialog.value = {
      open: true,
      content:
        "입력된 이메일 정보를 확인 할 수 없습니다.<br/> 이메일 정보를 확인 후 다시 로그인 바랍니다.",
    };
    return;
  }

  if (pw !== testPw) {
    dialog.value = {
      open: true,
      content: "비밀번호가 틀렸습니다.<br/> 확인 후 다시 로그인 바랍니다.",
    };
    return;
  }

  userStore.fetchInfo(email);
  router.push("/");
};
</script>
<template>
  <div
    class="d-flex flex-column justify-center align-center"
    style="margin-top: 7%"
  >
    <img class="login-img" src="/imgs/kakao.png" draggable="false" />
    <TextField
      class="mt-4"
      :validation="emailValid"
      prefix="e-mail"
      @blur="(val : string) => (userInfo.email = val)"
      @login="login"
    />
    <TextField
      class="mt-4"
      :validation="pwValid"
      prefix="비밀번호"
      @blur="(val : string) => (userInfo.pw = val)"
      @login="login"
    />
    <div>
      <v-btn class="mt-4" width="500px" height="60px" @click="login">
        login
      </v-btn>
    </div>
  </div>
  <Dialog :="dialog" @close="() => (dialog.open = false)" />
</template>
<style lang="scss" scoped>
.login-img {
  width: 500px;
  height: 500px;
}
</style>

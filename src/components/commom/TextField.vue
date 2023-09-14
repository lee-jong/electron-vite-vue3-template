<script setup lang="ts">
import { ref } from "vue";
interface TextFieldProps {
  prefix: string;
  validation: RegExp;
  width: string;
  msg: string;
}

const inputValue = ref("");
const errorMag = ref("");

const props = withDefaults(defineProps<TextFieldProps>(), {
  prefix: "",
  width: "500px",
  valid: () => /(?=.*\d)(?=.*[a-z]).{8,}/,
  msg: "",
});

const validation = () => {
  const val = inputValue.value;
  if (!val) return (errorMag.value = `${props.prefix}를 입력해주세요.`);
  if (!props.validation.test(val))
    return (errorMag.value = `${props.prefix} 형식에 맞추어주세요.`);

  errorMag.value = "";
  emit("blur", val);
};

const emit = defineEmits<{
  (e: "blur", val: string): void;
  (e: "login"): void;
}>();
</script>

<template>
  <div :style="`width: ${props.width}`">
    <v-text-field
      v-model="inputValue"
      bg-color="white"
      :placeholder="prefix"
      @blur="validation"
      :error-messages="errorMag"
      :type="props.prefix == '비밀번호' ? 'password' : ''"
      @keydown.enter="emit('login')"
    />
  </div>
</template>

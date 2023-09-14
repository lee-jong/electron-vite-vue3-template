<script setup lang="ts">
interface DialogProps {
  open: boolean;
  title?: string;
  content: string;
}

const props = withDefaults(defineProps<DialogProps>(), {
  open: false,
  title: "",
  content: "",
});

const emits = defineEmits(["close"]);
</script>
<template>
  <v-row justify="center" v-if="props.open">
    <v-dialog persistent width="500px" v-model="props.open">
      <v-card>
        <v-card-title
          class="d-flex justify-center text-h5"
          v-html="props.title"
        />
        <v-card-text
          class="d-flex justify-center text-center"
          v-html="props.content"
        />
        <v-card-actions class="d-flex justify-center">
          <v-btn color="green-darken-1" variant="text" @click="emits('close')">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

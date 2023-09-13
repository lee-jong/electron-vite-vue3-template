<script setup lang="ts">
interface MenuProps {
  className?: string;
  icon: string;
  transition: string;
}
const menuProps = withDefaults(defineProps<MenuProps>(), {
  className: "",
  icon: "mdi-view-headline",
  transition: "slide-x-reverse-transition",
});
</script>

<template>
  <v-menu
    :class="menuProps.className"
    :transition="menuProps.transition"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" size="60" color="black" style="z-index: 2001">
        <v-icon :icon="menuProps.icon" size="40" />
      </v-btn>
    </template>
    <v-list>
      <slot />
    </v-list>
  </v-menu>
</template>

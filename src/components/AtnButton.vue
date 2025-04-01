<template>
  <button  :class="['default', expand, type]">
    <font-awesome-icon
      class="icon"
      v-if="icon"
      :icon="['fas', icon]"
    />
    <slot></slot>
  </button>
</template>

<script setup>
import defaultTheme from "../config/DefautTheme"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { provide } from "vue"
provide("themeColors", defaultTheme);

const validSolidIcons = Object.values(solidIcons).filter(
  (icon) => icon.iconName !== undefined
);

library.add(...validSolidIcons);

const props = defineProps({
  expand: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  fontWeight: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "solid",
  },
  iconColor: {
    type: String,
    default: "",
  },
});

</script>

<style scoped>
@import '../styles/button.css';
</style>

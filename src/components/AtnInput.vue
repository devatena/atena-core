<template>
  <div :class="['main-input', expand]">
    <label
      v-if="props.label"
      for="custom-input"
      >{{ props.label }}</label
    >
    <div class="input">
      <FontAwesomeIcon
        class="icon"
        v-if="icon"
        :icon="['fas', icon]"
      />
      <input
        :type="type"
        class="default"
        v-model="model"
        autocomplete="off"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { provide } from "vue";
import defaultTheme from "../config/DefaultTheme"

provide("themeColors", defaultTheme);

const validSolidIcons = Object.values(solidIcons).filter(
  (icon) => icon.iconName !== undefined
);

library.add(...validSolidIcons);

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  expand: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

const model = defineModel();
</script>

<style scoped>
@import "../styles/input";
</style>

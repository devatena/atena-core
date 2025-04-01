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

<style scoped >
.default {
  padding-left: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  color: black;
  box-sizing: border-box;
  font-size: 10px;
  border-radius: 15px;
  width: 100%;
  height: 100%;
}

.input:has(.default:focus) {
  background-color: var(--primary-bg-color);
}

.input:has(.default:focus) input {
  color: var(--primary-text-color);
}

.input:has(.default:focus) .default::placeholder {
  color: var(--primary-text-color);
}

.input:has(.default:focus) .icon {
  color: var(--primary-text-color);
}

.default::placeholder {
  color: #4e4e4e;
}

.default:-webkit-autofill {
  background-color: yellow !important;
  color: black;
}

.input {
  background-color: #f3f3f3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 49px;
}

.main-input.block {
  width: 100%;
}

.icon {
  margin-left: 16px;
  width: 20px;
  color: var(--primary-bg-color);
}

label {
  font-weight: 600;
  font-size: 16px;
  color: #4e4e4e;
}

.main-input {
  width: 359px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: none;
}

</style>

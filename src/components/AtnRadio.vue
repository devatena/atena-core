<template>
  <div :class="['radio-div', type]">
    <label
      v-if="props.label"
      :for="`radio-${label}`"
      >{{ label }}</label
    >
    <div class="radio" v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :id="`radio-${uniqueId}`"
        :value="option.value"
        v-model="model"      />
      <span>{{ option[optionName] }}</span>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import defaultTheme from "../config/DefaultTheme"
provide("themeColors", defaultTheme);

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  backgroundColorActive: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [
      { value: "value", option: "option" },
      { value: "value", option: "option" },
      { value: "value", option: "option" },
    ],
  },
  optionName: {
    type: String,
    default: "option",
  },
  borderColor: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  fontColor: {
    type: String,
    default: "",
  },
});
const model = defineModel();
const uniqueId = crypto.randomUUID();

defineEmits(["update:inputValue"]);
</script>

<style scoped>
@import "../styles/radio.css";
</style>

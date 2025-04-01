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
.radio-div {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

input[type="radio"] {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #707070;
  background-color: transparent;
  appearance: none;
  position: relative;
  cursor: pointer;
  margin: 0;
}

input[type="radio"]:checked {
  border-color: var(--primary-border-color);
}


input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: var(--primary-border-color);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

label {
  font-size: 14px;
  color: #4e4e4e;
}

span {
  font-size: 10px;
  color: #848484;
}

.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: start;
}

</style>

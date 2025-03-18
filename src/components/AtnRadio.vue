<template>
  <div :class="['radio-div', type]">
    <label v-if="props.label" v-muda-cor-da-fonte :for="`radio-${label}`">{{
      label
    }}</label>
      <div class="radio" v-for="option in options" :key="option.value">
        <input
          type="radio"
          :id="`radio-${option.value}`"
          :value="option.value"
          :checked="inputValue === option.value"
          v-model="model"
          v-muda-cor-da-borda="borderColor"
          v-muda-background-ativo="{
            backgroundColorActive: props.backgroundColorActive,
            borderColor: props.borderColor,
          }"
          v-muda-background="props.backgroundColor"
        />
        <span v-muda-fonte v-muda-cor-da-fonte>{{ option[optionName] }}</span>
      </div>
  </div>
</template>

<script setup>
import {
  vMudaCorDaBorda,
  vMudaCorDaFonte,
} from "../diretivas/DiretivasGlobal";
import { vMudaBackgroundAtivo } from "../diretivas/RadioDiretivas";

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
    default: () => [],
  },
  optionName: {
    type: String,
    default: "option",
  },
  fontColor: {
    type: String,
    default: "",
  },
  borderColor: {
    type: String,
    default: "",
  },
  inputValue: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  display: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});
const model = defineModel()

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
  border-color: var(--checked-radio, #A50087);
}

input[type="radio"]:checked::before {
  background-color: var(--checked-radio, #A50087);
} 

input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: var(--checked-radio, #A50087);
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
  align-items: start
}
</style>

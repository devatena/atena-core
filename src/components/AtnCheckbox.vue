<template>
  <div :class="['checkbox-div', type]">
    <label v-if="props.label" v-muda-cor-da-fonte="fontColor" :for="`checkbox-${label}`">{{
      label
    }}</label>
    <div class="checkbox" v-for="(option, index) in options" :key="index">
      <input
        type="checkbox"
        :id="`checkbox-${uniqueId}`"
        :value="option.value"
        v-model="model"
        v-muda-cor-da-borda="borderColor"
        v-muda-background="props.backgroundColor"
      />
      <span v-muda-cor-da-fonte="fontColor" >{{ option[optionName] }}</span>
    </div>
  </div>
</template>

<script setup>
import { vMudaCorDaBorda, vMudaCorDaFonte } from "../diretivas/DiretivasGlobal";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [
      { value: "value1", option: "option1" },
      { value: "value2", option: "option" },
      { value: "value3", option: "option" },
    ],
  },
  optionName: {
    type: String,
    default: "option",
  },
  value: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  fontColor:{
    type: String,
    default: "",
  }
});

const model = defineModel();
const uniqueId = crypto.randomUUID();
defineEmits(["update:inputValue"]);
</script>

<style scoped>
.checkbox-div {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

input[type="checkbox"] {
  width: 12px;
  height: 12px;
  border: 1px solid #707070;
  border-radius: 0;
  cursor: pointer;
  border-radius: 0;
  margin: 0;
}

label {
  font-size: 14px;
  color: #4e4e4e;
}

span {
  font-size: 10px;
  color: #848484;
}

.checkbox {
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

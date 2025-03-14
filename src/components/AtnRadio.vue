<template>
  <div class="radio-div">
    <label v-if="props.label"
      v-muda-fonte
      v-muda-cor-da-fonte
      for="radioDefault"
      >{{ props.label }}</label
    >
    <div class="radio">
      <input
        :value="props.value"
        :checked="props.inputValue === props.value"
        @change="$emit('update:inputValue', props.value)"
        v-muda-cor-da-borda="props.borderColor"
        v-muda-background-ativo="{ backgroundColorActive: props.backgroundColorActive, borderColor: props.borderColor }"        v-muda-background="props.backgroundColor"
        type="radio"
        id="radioDefault"
      />
      <span v-muda-fonte v-muda-cor-da-fonte>{{
        props.option
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { vMudaCorDaBorda, vMudaCorDaFonte, vMudaBackground } from '../diretivas/DiretivasGlobal';
import { vMudaBackgroundAtivo } from '../diretivas/RadioDiretivas';

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  fontFamily: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  backgroundColorActive: {
    type: String,
    default: "",
  },
  option: {
    type: String,
    default: "",
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
  display:{
    type: String,
    default: "",
  }
});

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
  border: 2px solid #ccc;
  background-color: transparent;
  appearance: none;
  position: relative;
  cursor: pointer;
  margin: 0;
}

input[type="radio"]:checked {
  background-color: #fff;
  border-color: var(--checked-radio, #007bff);
}

input[type="radio"]:checked::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: var(--checked-radio, #007bff);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: var(--checked-radio, #007bff);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
label {
  font-size: 14px;
}
span {
  font-size: 10px;
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
}
</style>

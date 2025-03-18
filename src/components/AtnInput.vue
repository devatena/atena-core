<template>
  <label
    v-if="props.label"
    v-label-fonte-weight="labelFontWeight"
    v-muda-cor-do-label="labelColor"
    for="inputDefault"
    >{{ props.label }}</label
  >
  <div v-muda-background="backgroundColor" :class="['input', expand]">
    <FontAwesomeIcon v-muda-cor-da-fonte="fontColor" class="icon" v-if="icon" :icon="['fas', icon]" />
    <input
    :type="type"
      class="default"
      v-model="model"
      v-muda-background="backgroundColor"
      v-muda-cor-do-placeholder="placeholderColor"
      v-muda-cor-da-fonte="fontColor"
      id="inputDefault"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import {
  vMudaCorDoLabel,
  vMudaCorDoPlaceholder,
  vLabelFonteWeight,
} from "../diretivas/InputDiretivas";
import { vMudaBackground, vMudaCorDaFonte } from "../diretivas/DiretivasGlobal";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

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
  backgroundColor: {
    type: String,
    default: "",
  },
  fontColor: {
    type: String,
    default: "",
  },
  labelColor: {
    type: String,
    default: "",
  },
  placeholderColor: {
    type: String,
    default: "",
  },
  labelFontWeight: {
    type: String,
    default: "",
  },
  placeholderFontWeight: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "solid",
  },
  icon: {
    type: String,
    default: "",
  },
});

const model = defineModel();
</script>

<style scoped>
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

.input:has(.default:focus){
  background-color: #a50087;
}

.input:has(.default:focus) .default::placeholder{
  color: white;
}

.input:has(.default:focus) .icon {
  color: white;
}

.default::placeholder {
  color: var(--placeholder-color, #4e4e4e);
}

.input {
  background-color: var(--bg-color, #f3f3f3);
  border-radius: 15px;
  display: flex;
  align-items: center;
  height: 49px;
  width: 359px;
}

.input.block {
  width: 100%;
}

.icon {
  margin-left: 16px;
  width: 20px;
  color: #a50087;
}

label {
  font-weight: 600;
  font-size: 16px;
  color: #4e4e4e;
}


</style>

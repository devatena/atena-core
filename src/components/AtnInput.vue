<template>
  <div :class="['', expand]">
    <label v-if="props.label"
      v-label-fonte-weight="labelFontWeight"
      v-muda-cor-do-label="labelColor"
      for="inputDefault"
      >{{ props.label }}</label
    >
    <input
      :class="['default', type]"
      v-model="model"
      v-muda-cor-do-placeholder="placeholderColor"
      v-muda-background="backgroundColor"
      v-muda-cor-da-fonte="fontColor"
      id="inputDefault"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { vMudaBackground, vMudaCorDoLabel, vMudaCorDaFonte, vMudaCorDoPlaceholder, vLabelFonteWeight, vInputFonteWeight} from "../diretivas/InputDiretivas"

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
  gap: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "solid",
  },
});

const model = defineModel();
</script>

<style scoped>
.default {
  background-color: #f3f3f3;
  border-radius: 15px;
  border: none;
  outline: none;
  color: black;
  box-sizing: border-box;
  padding: 10px;
  font-size: 10px;
  width: 100%;
}

.default::placeholder {
  color: var(--placeholder-color, #999);
}

.default::placeholder {
  font-weight: var(--placeholder-weight, 300);
}

.block {
  width: 100%;
}

.icon {
  width: 20px;
}

label {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 10px;
}

div {
  gap: 11px;
  display: flex;
  flex-direction: column;
}
.outline {
  background-color: transparent;
  border: 1px solid rgb(63, 28, 146);
}
</style>

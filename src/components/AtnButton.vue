<template>
  <button
    v-muda-cor-da-borda="borderColor"
    v-muda-cor-da-fonte="fontColor"
    v-muda-background="backgroundColor"
    v-fonte-weight="fontWeight"
    :class="['default', expand, type]"
  >
    <slot></slot>
  </button>
</template>
<script setup>

import { vMudaCorDaFonte, vMudaBackground, vFonteWeight, vMudaCorDaBorda } from "../diretivas/DiretivasGlobal"

defineProps({
  expand: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  icone: {
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
  fontWeight: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "solid",
  },
});
</script>
<style scoped>
.default {
  gap: 6px;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  background: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 0;
  border-radius: 30px; 
}

.default::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 30px;
  background-color: var(--bg-color, #A50087);
}

.default:hover::before {
  filter: contrast(0.75);
}

.block {
  width: 100%;
}

.default.outline {
  --bg-color: transparent;
  border: 2px solid rgb(79, 18, 177);
  color: rgb(60, 43, 88);
}

.icon {
  width: 20px;
}
.circle{
  border-radius: 50%;
}

.secondary{
  background-color: #F0C3F4;
  color: #A50087;
}
</style>

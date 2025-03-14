<template>
  <div
    :class="['default', expand, type]"
    v-muda-cor-da-fonte
    v-outline
    v-muda-background
  >
    <span>Icone aqui</span>
    <p>Icone Label</p>
  </div>
</template>

<script setup>

const props = defineProps({
  labelIcon: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "solid",
  },
  expand: {
    type: String,
    default: "",
  },
  fontColor: {
    type: String,
    default: "",
  },
  gap: {
    type: String,
    default: "",
  },
});
import { vMudaBackground, vMudaCorDaFonte } from "../diretivas/DiretivasGlobal"

</script>

<style scoped>
.default {
  cursor: pointer;
  padding: 9px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
  background-color: rgb(70, 19, 189);
  z-index: 0;
  position: relative;
  border-radius: 4px;
}

.default::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--bg-color, rgba(255, 255, 255, 0.2));
  z-index: -1;
}

.default:hover::before {
  filter: contrast(0.75);
}

p {
  font-family: Poppins, sans-serif;
  color: white;
  margin: 0;
  font-size: 11px;
}

.expand {
  width: 100%;
}

.default.outline {
  background-color: transparent;
  --bg-color: transparent;
  border: 2px solid rgb(77, 13, 151);
}

.default.outline p {
  color: black;
}
.icon{
    width: 20px;
}
.block{
    width: 100%;
}
</style>

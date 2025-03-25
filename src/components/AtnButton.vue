<template>
  <button
    v-muda-cor-da-borda="borderColor"
    v-muda-cor-da-fonte="fontColor"
    v-muda-background="backgroundColor"
    v-fonte-weight="fontWeight"
    :class="['deafault', expand, type]"
  >
    <font-awesome-icon v-muda-cor-da-fonte="iconColor" class="icon" v-if="icon" :icon="['fas', icon]" />
    <slot></slot>
  </button>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  vMudaCorDaFonte,
  vMudaBackground,
  vFonteWeight,
  vMudaCorDaBorda,
} from "../diretivas/DiretivasGlobal";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

const validSolidIcons = Object.values(solidIcons).filter(
  (icon) => icon.iconName !== undefined
);

library.add(...validSolidIcons);

const props = defineProps({
  expand: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  icon: {
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
  iconColor:{
    type: String,
    default: "",
  }
  
});

</script>

<style scoped>

.deafault {
  gap: 10px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  color: var(--primary-text-color);
  padding: 14px 70px;
  cursor: pointer;
  z-index: 0;
  border-radius: 30px;
}

.deafault::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 30px;
  background-color: var(--primary-bg-color, #a50087);
}

.deafault:hover::before {
  filter: contrast(0.75);
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.deafault.outline {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #a50087;
  color: var(--primary-text-color);
}

.icon {
  width: 20px;
}

.deafault.circle {
  width: 56px;
  height: 56px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.secondary {
  background-color: var(--secondary-bg-color);
  color: var(--secondary-text-color);
}

.primary {
  background-color: var(--primary-bg-color);
  color: var(--primary-text-color);
}

</style>

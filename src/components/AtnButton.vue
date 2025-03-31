<template>
  <button  :class="['default', expand, type]">
    <font-awesome-icon
      class="icon"
      v-if="icon"
      :icon="['fas', icon]"
    />
    <slot></slot>
  </button>
</template>

<script setup>
import defaultTheme from "../config/DefautTheme"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { provide } from "vue"

provide("themeColors", defaultTheme);

const validSolidIcons = Object.values(solidIcons).filter(
  (icon) => icon.iconName !== undefined
);

library.add(...validSolidIcons);

const props = defineProps({
  expand: {
    type: String,
    default: "",
  },
  icon: {
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
  iconColor: {
    type: String,
    default: "",
  },
});

</script>

<style scoped>
.default {
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

.default::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 30px;
  background-color: var(--primary-bg-color);
}

.default:hover::before {
  filter: contrast(0.75);
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.icon {
  width: 20px;
}

.primary .icon {
  color: var(--primary-text-color);
}

.secondary .icon {
  color: var(--secondary-text-color);
}

.default.circle {
  width: 56px;
  height: 56px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.secondary::before {
  background-color: var(--secondary-bg-color);
  color: var(--secondary-text-color);
}

.secondary {
  color: var(--secondary-text-color);
}

.primary::before {
  background-color: var(--primary-bg-color);
}

.primary {
  color: var(--primary-text-color);
}

.default.outline::before {
  background-color: transparent;
  border: 1px solid var(--primary-border-color);
}

.default.outline {
  color: var(--primary-border-color);
}

</style>

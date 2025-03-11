<template>
  <button
    v-outline
    v-muda-cor-da-fonte
    v-muda-background
    v-font-weight
    v-muda-fonte
    :class="['default', expand]"
  >
    <!-- <IonIcon class="icon" :icon="icon" />  -->
    <slot></slot>
  </button>
</template>

<script setup>
//  import * as icons from "ionicons/icons";
//  import { IonIcon } from "@ionic/vue";
import { onMounted } from "vue";
import { ref } from "vue";
const props = defineProps({
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
  fontWeight:{
    type: String,
    default: "",
  },
  fontFamily:{
    type: String,
    default: "",
  }
});
// const icon = ref(icons[props.icone])

const vMudaBackground = {
  mounted: (el) => {
    el.style.setProperty("--bg-color", props.backgroundColor);
  },
};

const vMudaCorDaFonte = {
  mounted: (el) => {
    el.style.color = props.fontColor;
  },
};

const vOutline = {
  mounted: (el) => {
    el.style.border = `2px solid ${props.borderColor}`;
  },
};

const vFontWeight = {
  mounted: (el) => {
    el.style.fontWeight = props.fontWeight
  },
};

const vMudaFonte = {
  mounted: (el) => {
    el.style.fontFamily = props.fontFamily
  },
};
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
  background-color: var(--bg-color, #AC6200);
}

.default:hover::before {
  filter: contrast(0.75);
}

.block {
  width: 100%;
}
.icon {
  width: 20px;
}
</style>

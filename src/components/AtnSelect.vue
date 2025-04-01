<template>
  <div :class="['custom-select', extend]" ref="selectContainer">
    <label v-if="props.label">{{ label }}</label>
    <div class="selected-option" @click="toggleDropdown">
      {{ valorAtual }}
      <font-awesome-icon
        :class="['icon',  type]"
        :icon="['fas', 'chevron-down']"
      />
    </div>
    <ul v-if="isDropdownVisible" class="options-list">
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { provide } from "vue";
import defaultTheme from "../config/DefaultTheme"
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

provide("themeColors", defaultTheme);
library.add(faChevronDown);

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "Selecione uma opção",
  },
  options: {
    type: Array,
    default: () => [
      { value: "value", option: "option" },
      { value: "value", option: "option" },
      { value: "value", option: "option" },
    ],
  },
  extend: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const valorAtual = ref("selecione um valor");
const isDropdownVisible = ref(false);
const selectContainer = ref();

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

const selectOption = (option) => {
  emit("update:modelValue", option.option);
  valorAtual.value = option.option;
  isDropdownVisible.value = false;
};

const removeDropDown = (element) => {
  if (!selectContainer.value.contains(element.target)) {
    isDropdownVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", removeDropDown);
});
</script>

<style scoped>
@import "../styles/select.css"
</style>

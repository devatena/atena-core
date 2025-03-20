<template>
  <div class="custom-select">
    <label>{{ label }}</label>
    <div class="selected-option" @click="toggleDropdown">
      {{ valorAtual }}
      <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
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
import { ref, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown);

const props = defineProps({
  label: {
    type: String,
    default: "Selecione uma opção",
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
});

const emit = defineEmits(["update:modelValue"]);
const valorAtual = ref("selecione um valor")
const isDropdownVisible = ref(false);

watch(
  ()=> props.selectedOption,
  (newValor) => {
    valorAtual.value = newValor
  }
)

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

const selectOption = (option) => {
  emit("update:modelValue", option.option);
  valorAtual.value = option.option
  isDropdownVisible.value = false;
}

</script>

<style scoped>
.custom-select {
  position: relative;
  width: 200px;
  font-size: 14px;
  color: #4e4e4e;
  display: flex;
  flex-direction: column;
}

.selected-option {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #f3f3f3;
  cursor: pointer;
}

.options-list {
  position: absolute;
  top: calc(100% + 5px);
  left: 15px;
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.options-list li:first-child {
  border-top: none;
}

.options-list li {
  list-style: none;
  padding: 6px 15px;
  cursor: pointer;
  border-top: 1px solid #EAEAEA;
}

.options-list li:hover {
  background-color: #d6d3d3;
  border-radius: 15px;
}

.icon {
  color: #a50087;
  font-size: 16px;
}
</style>

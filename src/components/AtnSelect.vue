<template>
  <div class="custom-select">
    <label>{{ label }}</label>
    <div class="selected-option" @click="toggleDropdown">
      {{ selectedOption }}
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
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown);

const props = defineProps({
  label: {
    type: String,
    default: "Selecione uma opção",
  },
  selectedOption: {
    type: String,
    default: "Selecione uma opção",
  },
  options: {
    type: Array,
    default: () => [
      { value: "1", option: "Opção 1" },
      { value: "2", option: "Opção 2" },
      { value: "3", option: "Opção 3" },
    ],
  },
});

const emit = defineEmits(["update:selectedOption"]);

const isDropdownVisible = ref(false);

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

const selectOption = (option) => {
  emit("update:selectedOption", option.text);
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
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.options-list li {
  list-style: none;
  padding: 10px 15px;
  cursor: pointer;
}

.options-list li:hover {
  background-color: #d6d3d3;
  border-radius: 10px;
}

.icon {
  color: #a50087;
  font-size: 16px;
}
</style>

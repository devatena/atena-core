<template>
  <div :class="['checkbox-div', type]">
    <label v-if="props.label" :for="`checkbox-${label}`">{{
      label
    }}</label>
    <div class="checkbox" v-for="(option, index) in options" :key="index">
      <input
        type="checkbox"
        :id="`checkbox-${uniqueId}`"
        :value="option.value"
        v-model="model"
      />
      <span>{{ option[optionName] }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [
      { value: "value1", option: "option1" },
      { value: "value2", option: "option" },
      { value: "value3", option: "option" },
    ],
  },
  optionName: {
    type: String,
    default: "option",
  },
  value: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },

});

const model = defineModel();
const uniqueId = crypto.randomUUID();
defineEmits(["update:inputValue"]);
</script>

<style scoped>
@import "../styles/checkbox.css";
</style>

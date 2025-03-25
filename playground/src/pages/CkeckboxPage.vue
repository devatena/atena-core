<template>
  <div class="checkboxpage">
    <div class="checkbox">
      <h1>Checkbox com label</h1>
      <AtnCheckbox 
      v-model="valoratual" 
      :options="options"
      optionName="option" 
      label="checbox" />
    </div>
    <div class="checkbox">
      <h1>Checkbox sem label</h1>
      <AtnCheckbox/>
    </div>
    <div class="checkbox">
      <h1>Checkbox sem label e column</h1>
      <AtnCheckbox type="column" />
    </div>
    <div class="checkbox">
      <h1>Checkbox com label e column</h1>
      <AtnCheckbox type="column" label="checbox" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AtnCheckbox } from "../../../src";

const valoratual = ref([]);

const options = ref([
  { value: "1", option: "Opção 1" },
  { value: "2", option: "Opção 2" },
  { value: "3", option: "Opção 3" },
]);
</script>

<style scoped>

.checkboxpage {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

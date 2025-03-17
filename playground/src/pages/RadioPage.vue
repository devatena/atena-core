<template>
  <div class="radio">
    <AtnRadio label="Label" optionName="Value 01" />
  </div>
  <div class="radio2">
    <AtnRadio
      label="escolha uma opcao"
      :options="radioOptions"
      optionName="option"
      v-model:inputValue="selectedOption"
      type="column"
       backgroundColorActive="red"
    />
  </div>
  <p>{{ selectedOption }}</p>
</template>

<script setup>
import { AtnRadio } from "../../../src";
import { ref } from "vue";

const selectedOption = ref("");
const selectedOption2 = ref("");
const radioOptions = ref([
  { value: "op1", option: "Opção 1" },
  { value: "op2", option: "Opção 2" },
  { value: "op3", option: "Opção 3" },
]);


const radioOptions2 = ref([
  { value: "op1", option: "Opção 1" },
  { value: "op2", option: "Opção 2" },
  { value: "op3", option: "Opção 3" },
]);
</script>

<style scoped>
.radio {
  gap: 8px;
  display: flex;
}
.radio2 {
  gap: 8px;
  display: flex;
}
.radio3 {
  gap: 8px;
  display: flex;
}
</style>

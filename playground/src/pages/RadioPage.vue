<template>
  <div class="radio-main">
    <div class="radio">
      <h1>Radio com Label</h1>
      <AtnRadio
        label="escolha uma opcao"
        :options="radioOptions"
        optionName="option"
        v-model="selectedOption"
      />
    </div>
    <div class="radio">
      <h1>Radio sem Label</h1>
      <AtnRadio
        :options="radioOptions"
        optionName="option"
        v-model="selecao2"
      />
    </div>
    <div class="radio">
      <h1>Radio com Label type column</h1>
      <AtnRadio
        type="column"
        label="escolha uma opcao"
        :options="radioOptions"
        optionName="option"
        v-model="selectedOption"
      />
    </div>
    <div class="radio nlwc">
      <h1>Radio sem Label type column</h1>
      <AtnRadio
        type="column"
      />
    </div>
  </div>
</template>

<script setup>
import { AtnRadio } from "../../../src";
import { ref } from "vue";

const selectedOption = ref("");
const selecao2 = ref("");

const radioOptions = ref([
  { value: "op1", option: "Opção 1" },
  { value: "op2", option: "Opção 2" },
  { value: "op3", option: "Opção 3" },
]);
</script>

<style scoped>
.radio {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
}

.radio-main {
  height: 100vh;
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 0;
  line-height: 1;
  margin-right: 10px;
}

.nlwc {
  margin-top: -25px;
}

</style>

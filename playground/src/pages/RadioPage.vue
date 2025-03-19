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
        v-model="selectedOption"
      />
    </div>
    <div class="radio">
      <h1>Radio com Label e column</h1>
      <AtnRadio
        type="column"
        label="escolha uma opcao"
        :options="radioOptions"
        optionName="option"
        v-model="selectedOption"
      />
    </div>
    <div class="radio">
      <h1>Radio sem Label e column</h1>
      <AtnRadio
        type="column"
        :options="radioOptions"
        optionName="option"
        v-model="selectedOption"
      />
    </div>
    {{ selectedOption  }}
  </div>
</template>

<script setup>
import { AtnRadio } from "../../../src";
import { ref } from "vue";

const selectedOption = ref("");

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
  justify-content: center;
  flex-direction: column;
  background-color: rgba(250, 252, 252, 0.644);;
  border-radius: 10px;
  padding: 30px 20px;
  gap: 10px;
  height: 70px;
}
.radio-main {
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

h1 {
  margin: 0;
  line-height: 1;
}
</style>

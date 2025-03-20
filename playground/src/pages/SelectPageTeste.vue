<template>
  <div class="select-main">
    <div class="select-div">
      <h1>Select com label</h1>
      <AtnSelect label="Categoria" />
    </div>
    <div class="select-div">
      <h1>Select sem label</h1>
      <div>
        <AtnSelect
          v-model="opcaoSelecionada"
          :options="minhasOpcoes"
          optionName="option"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { AtnSelect } from "../../../src";
import { ref } from "vue";

const opcaoSelecionada = ref();

const minhasOpcoes = [
  { value: "op1", option: "Opção 1" },
  { value: "op2", option: "Opção 2" },
  { value: "op3", option: "Opção 3" },
];
</script>

<style scoped>
.select-div {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.select-main {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}
</style>

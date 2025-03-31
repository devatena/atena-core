<template>
  <div class="select-main">
    <div class="select-div">
      <h1>Select com label</h1>
      <AtnSelect type="secondary" label="Categoria" />
    </div>
    <div class="select-div">
      <h1>Select sem label</h1>
      <div>
        <AtnSelect
        type="primary"
          v-model="opcaoSelecionada"
          :options="minhasOpcoes"
          optionName="option"
        />
      </div>
    </div>
    <div class="select-div">
      <h1>Expandido</h1>
      <div class="expand">
        <AtnSelect
        label="select com expand"
          extend="block"
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
.select-main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 70px; 
}

.select-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.expand{
  width: 400px;
}

</style>

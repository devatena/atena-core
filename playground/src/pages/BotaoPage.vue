<template>
  <div class="button-page">
    <div class="button-div">
      <h1>Botao Com icone</h1>
      <AtnButton type="primary" icon="user">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao sem icone</h1>
      <AtnButton>botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao secundario</h1>
      <AtnButton icon="user">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Outline</h1>
      <AtnButton >botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Expandido</h1>
      <AtnButton expand="block">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao Circular</h1>
      <AtnButton icon="house" type="circle"></AtnButton>
    </div>
    <div class="button-div">
      <AtnButton type="secondary">Teste lib</AtnButton>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { AtnButton } from "../../../src";
import defaultButtonTheme from "../../../src/config/buttonTheme";

provide('buttonTheme', defaultButtonTheme);
</script>

<style scoped>
.button-page {
  display: grid;
  grid-template-columns: 500px 500px;
  gap: 0;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.button-div {  
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

h1 {
  margin: 0;
  line-height: 1;
}
</style>

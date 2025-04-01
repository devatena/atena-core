<template>
  <div class="button-page">
    <div class="button-div">
      <h1>Botao Com icone</h1>
      <AtnButton type="primary" icon="user">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao sem icone</h1>
      <AtnButton class="primary">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao secundario</h1>
      <AtnButton type="secondary" icon="user">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Outline</h1>
      <AtnButton type="outline">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Expandido</h1>
      <AtnButton expand="block" type="secondary">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao Circular</h1>
      <AtnButton icon="user" type="circle" ></AtnButton>
    </div>
  </div>
</template>

<script setup>

import { AtnButton } from '../../../src';
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

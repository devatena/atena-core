<template>
  <div class="button-page">
    <div class="button-div">
      <h1>Botao Com icone</h1>
      <AtnButton icon="user">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao sem icone</h1>
      <AtnButton>botao de teste</AtnButton>
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
      <AtnButton expand="block">botao de teste</AtnButton>
    </div>
    <div class="button-div">
      <h1>Botao Circular</h1>
      <AtnButton icon="house" type="circle"></AtnButton>
    </div>
  </div>
</template>

<script setup>
import { AtnButton } from "../../../src";
</script>

<style scoped>
.button-page {
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  gap: 10px;
}
.button-div{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  background-color: rgba(250, 252, 252, 0.644);
  border-radius: 10px;
  gap: 10px;
}
h1{
  margin: 0;
  line-height: 1;
}
</style>

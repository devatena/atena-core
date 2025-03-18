<template>
  <div class="button-page">
    <div>
      <div>
        <h1>Botao Com icone</h1>
        <AtnButton icon="user">botao de teste</AtnButton>
      </div>
      <div>
        <h1>Botao sem icone</h1>
        <AtnButton>botao de teste</AtnButton>
      </div>
      <div>
        <h1>Botao secundario</h1>
        <AtnButton type="secondary" icon="user">botao de teste</AtnButton>
      </div>
    </div>
    <div>
      <div>
        <h1>Outline</h1>
        <AtnButton type="outline">botao de teste</AtnButton>
      </div>
      <div class="expand">
        <h1>Expandido</h1>
        <AtnButton expand="block">botao de teste</AtnButton>
      </div>
      <div>
        <h1>Botao Circular</h1>
        <AtnButton icon="house" type="circle"></AtnButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AtnButton } from "../../../src";
</script>

<style scoped>
.button-page {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
  height: 100vh;
}
.expand {
  width: 600px;
}
</style>

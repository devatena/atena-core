<script setup lang="ts">
import { MeuBotao } from "atena-core";
</script>

<template>
  <div>
    <h1>Teste componentes</h1>
    <MeuBotao>Testando o botao</MeuBotao>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <div class="main-layout">
    <CardsComponente titulo="Botões" @click="router.push('buttonPageTeste')" />
    <CardsComponente titulo="Inputs" @click="router.push('inputPageTeste')"/>
    <CardsComponente titulo="Radios" @click="router.push('radioPageTeste')"/>
  </div>
</template>

<script setup>
import CardsComponente from "../components/CardsComponente.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped>
.main-layout {
  height: 100vh;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
</style>

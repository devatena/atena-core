<template>
  <div class="main-layout">
    <h1>Acompanhe o DS da Atena Agência!</h1>
    <div class="cards">
      <CardsComponente
        titulo="Botões"
        @click="router.push('buttonPageTeste')"
      />
      <CardsComponente titulo="Inputs" @click="router.push('inputPageTeste')" />
      <CardsComponente titulo="Radios" @click="router.push('radioPageTeste')" />
      <CardsComponente
        titulo="Selects"
        @click="router.push('selectPageTeste')"
      />
      <CardsComponente
        titulo="Checkbox"
        @click="router.push('checkboxPageTeste')"
      />
    </div>
  </div>
</template>

<script setup>
import CardsComponente from "../components/CardsComponente.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped>
.main-layout{
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.cards{
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  gap: 40px;
}

h1  {
  grid-column: span 2;
  text-align: center;
}

.cards > :last-child {
  grid-column: 1 / -1;
  justify-self: center;
}

</style>

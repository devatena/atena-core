<template>
  <header>
    <div><font-awesome-icon @click="router.push('/layout/paginaInicial')" class="icon" :icon="['fas', 'arrow-left']" /></div>
    <div class="options-header">
      <div @click="router.push('/layout/buttonPageTeste')">Buttons</div>
      <div @click="router.push('/layout/inputPageTeste')">Inputs</div>
      <div @click="router.push('/layout/radioPageTeste')">Radios</div>
      <div @click="router.push('/layout/selectPageTeste')">Select</div>
    </div>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter()

library.add(faArrowLeft);
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #A50087;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  box-sizing: border-box;
  padding: 20px;
}
.options-header{
    display: flex;
    gap: 10px;
    cursor: pointer;
    color: white;
}
.icon{
    color: white;
    cursor: pointer;
}
</style>

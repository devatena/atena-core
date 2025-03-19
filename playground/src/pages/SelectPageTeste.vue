<template>
  <div class="select-main">
    <div class="select-div">
      <h1>Select com label</h1>
      <AtnSelect label="Categoria" />
    </div>
    <div class="select-div">
      <h1>Select sem label</h1>
      <AtnSelect label="" />
    </div>
  </div>
</template>

<script setup>
import AtnSelect from "../../../src/components/AtnSelect.vue";
</script>

<style scoped>
.select-div {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.select-main{
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
}
</style>

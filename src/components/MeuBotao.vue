<template>
  <button class="meu-botao">
    <slot />
  </button>
</template>

<style scoped>
.meu-botao {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
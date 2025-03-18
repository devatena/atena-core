<template>
  <div class="main-card">
    <div>
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'arrow-left']"
      />
    </div>
    <h1>{{ titulo }}</h1>
    <p>{{ paragrafo }}</p>
  </div>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    default: "",
  },
  paragrafo: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.main-card {
  cursor: pointer;
  width: 300px;
  height: 170px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
}

h1,
p {
  margin: 0;
}
h1 {
  font-size: 15px;
}
p {
  font-size: 11px;
}
</style>

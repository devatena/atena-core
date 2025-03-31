<template>
  <div class="main-card">

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
  color: white;
  cursor: pointer;
  width: 300px;
  height: 120px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #A50087, #ff69b4);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.main-card:hover{
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.11);
  transform: scale(1.02);
}

h1,
p {
  margin: 0;
}
h1 {
  font-size: 35px;
}
p {
  font-size: 11px;
}
</style>

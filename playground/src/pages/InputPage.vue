<template>
  <form autocomplete="off" class="input-page">
    <div class="input-div">
      <h1>input com label e icone</h1>
      <AtnInput type="primary" icon="user" label="Label Do Input" placeholder="placeholder" />
    </div>
    <div class="input-div">
      <h1>input com label e sem icone</h1>
      <AtnInput
        label="Label Do Input"
        type="number"
        placeholder="placeholder"
      />
    </div>
    <div class="input-div">
      <h1>input sem label e sem icone</h1>
      <AtnInput placeholder="placeholder" />
    </div>
    <div class="input-div">
      <h1>input sem label e com icone</h1>
      <AtnInput type="secondary" icon="user" placeholder="placeholder" />
    </div>
    <div class="input-div">
      <h1>Expandido</h1>
      <AtnInput
        label="label do input"
        expand="block"
        icon="user"
        placeholder="placeholder"
        v-model="inputValue"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { AtnInput } from "../../../src";
const inputValue = ref("");
</script>

<style scoped>
.input-page {
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  grid-template-columns: 600px 600px;
  gap: 10px;
}

.input-div {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  padding: 30px 20px;
}

h1 {
  margin: 0;
  line-height: 1;
}
</style>

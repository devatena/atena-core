<template>
  <div class="input-page">
    <div class="input-div">
      <h1>input com label e icone</h1>
      <AtnInput
        type="text"
        icon="user"
        label="Label Do Input"
        placeholder="placeholder"
      />
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
      <AtnInput icon="user" placeholder="placeholder" />
    </div>
    <div class="input-div">
      <h1>Expandido</h1>
      <AtnInput
        label="label do input"
        expand="block"
        icon="user"
        placeholder="placeholder"
        type="password"
      />
    </div>
  </div>
</template>

<script setup>
import { AtnInput } from "../../../src";
</script>

<style scoped>
.input-page {
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.input-div {
  background-color: rgba(250, 252, 252, 0.644);
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

<template>
  <div class="input-page">
    <div>
      <h1>input com label e icone</h1>
      <AtnInput
        expand="block"
        type="text"
        icon="user"
        label="Label Do Input"
        placeholder="placeholder"
      />
    </div>
    <div>
      <h1>input com label e sem icone</h1>
      <AtnInput
        label="Label Do Input"
        type="number"
        placeholder="placeholder"
      />
    </div>
    <div>
      <h1>input sem label e sem icone</h1>
      <AtnInput placeholder="placeholder" type="datatime" />
    </div>
    <div>
      <h1>
        input sem label e com icone
      </h1>
      <AtnInput
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
 
  display: flex;

  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
</style>

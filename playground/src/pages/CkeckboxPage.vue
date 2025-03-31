<template>
  <div class="checkboxpage">
    <div class="checkbox">
      <h1>Checkbox com label</h1>
      <AtnCheckbox
      v-model="valoratual"
      :options="options"
      optionName="name"
       />
    </div>
    <div class="checkbox">
      <h1>Checkbox sem label</h1>
      <AtnCheckbox/>
    </div>
    <div class="checkbox">
      <h1>Checkbox sem label e column</h1>
      <AtnCheckbox type="column" />
    </div>
    <div class="checkbox">
      <h1>Checkbox com label e column</h1>
      <AtnCheckbox type="column" label="checkbox" />
    </div>
    {{ valoratual }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AtnCheckbox } from "../../../src";

const valoratual = ref([])
const options = [
  { value: "op1", name: "Opção 1" },
  { value: "op2", name: "Opção 2" },
  { value: "op3", name: "Opção 3" },
]

</script>

<style scoped>
.checkboxpage {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

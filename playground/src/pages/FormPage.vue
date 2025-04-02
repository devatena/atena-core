<template>
  <div class="container-pai">
    <form class="form">
      <AtnInput
        v-model="cpf"
        labelFontWeight="600"
        label="CPF ou E-mail"
        placeholder="CPF ou e-mail"
        expand="block"
        placeholderFontWeight="300"
        labelColor="#AC6200"
      ></AtnInput>
      <AtnInput
        v-model="senha"
        labelFontWeight="600"
        placeholderFontWeight="300"
        label="Senha"
        placeholder="Insira sua senha"
        expand="block"
        labelColor="#AC6200"
      ></AtnInput>
      <div class="radios">
        <AtnRadio
          v-model:inputValue="valorRadio"
          value="masculino"
          labelFontWeight="400"
          backgroundColorActive="#AC6200"
          fontColor="#999"
          option="Masculino"
          label="Sexo:"
        ></AtnRadio>
        <AtnRadio
          v-model:inputValue="valorRadio"
          value="feminino"
          backgroundColorActive="#AC6200"
          fontColor="#999"
          option="Feminino"
        ></AtnRadio>
      </div>
      <AtnButton
        @click="router.push('/formConnectOnTeste')"
        expand="block"
        fontColor="white"
        backgroundColor="#AC6200"
        >Entrar</AtnButton
      >
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AtnRadio } from "../../../src";
import { AtnInput } from "../../../src";
import { AtnButton } from "../../../src";
import { useRouter } from "vue-router";

const router = useRouter();
const cpf = ref("");
const senha = ref("");
const valorRadio = ref("");
</script>

<style scoped>
.container-pai {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}

.form {
  border-radius: 10px;
  width: 350px;
  height: 270px;
  padding: 11px 26px 21px;
  background-color: #ffffff;
  flex-direction: column;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.radios {
  width: 100%;
  gap: 15px;
  display: flex;
}
</style>

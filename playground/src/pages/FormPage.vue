<template>
  <div class="container-pai">
    <form class="form">
      <AtnInput
        v-model:inputValue="cpf"
        labelFontWeight="600"
        fontFamily="Poppins"
        label="CPF ou E-mail"
        placeholder="CPF ou e-mail"
        expand="block"
        placeholderFontWeight="300"
        labelColor="#AC6200"
      ></AtnInput>
      <AtnInput
        v-model:inputValue="senha"
        labelFontWeight="600"
        placeholderFontWeight="300"
        fontFamily="Poppins"
        label="Senha"
        placeholder="Insira sua senha"
        expand="block"
        labelColor="#AC6200"
      ></AtnInput>
      <div class="radios">
        <AtnRadio
          labelGap="10px"
          v-model:inputValue="valorRadio"
          optionGap="4px"
          value="masculino"
          labelFontWeight="400"
          fontFamily="Poppins"
          backgroundColorActive="#AC6200"
          backgroundColor="transparent"
          fontColor="#999"
          option="Masculino"
          label="Sexo:"
        ></AtnRadio>
        <AtnRadio
          v-model:inputValue="valorRadio"
          optionGap="4px"
          value="feminino"
          backgroundColorActive="#AC6200"
          fontColor="#999"
          option="Feminino"
          fontFamily="Poppins"
          optionFontWeight="400"
        ></AtnRadio>
      </div>
      <AtnButton
        @click="router.push('/formConnectOnTeste')"
        fontFamily="Poppins"
        expand="block"
        fontColor="white"
        backgroundColor="#AC6200"
        fontWeight="300"
        >Entrar</AtnButton
      >
    </form>
    {{ senha }}
    {{ cpf }}
    {{ valorRadio }}
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

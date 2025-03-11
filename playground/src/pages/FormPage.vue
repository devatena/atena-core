<template>
  <div class="container-pai">
    <form class="form">
      <AtnInput
        fontFamily="Poppins"
        label="Label teste"
        placeholder="CPF ou e-mail"
        expand="block"
        labelColor="#AC6200"
      ></AtnInput>
      <AtnInput
        fontFamily="Poppins"
        label="Label teste"
        placeholder="Insira sua senha"
        expand="block"
        labelColor="#AC6200"
      ></AtnInput>
      <div class="radios">
        <AtnRadio
          fontFamily="Poppins"
          backgroundColor="#AC6200"
          fontColor="#999"
          option="Masculino"
          label="Sexo:"
        ></AtnRadio>
        <AtnRadio
          backgroundColor="#AC6200"
          fontColor="#999"
          option="Feminino"
        ></AtnRadio>
      </div>
      <AtnButton
        fontFamily="Poppins"
        expand="block"
        fontColor="white"
        backgroundColor="#AC6200"
        >Entrar</AtnButton
      >
    </form>
  </div>
</template>

<script setup>
import { AtnRadio } from "../../../src";
import { AtnInput } from "../../../src";
import { AtnButton } from "../../../src";
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

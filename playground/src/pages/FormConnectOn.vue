<template>
  <div class="container-pai">
    <form @submit.prevent class="form">
      <div class="inputs-login">
        <AtnInput
          label="CPF ou e-mail"
          gap="7px"
          v-model="cpf"
          labelFontWeight="600"
          placeholderColor="#6E6E6C"
          fontFamily="Poppins"
          placeholder="CPF ou e-mail"
          expand="block"
          placeholderFontWeight="300"
          labelColor="#5845DB"
        ></AtnInput>
        <AtnInput
          gap="7px"
          v-model="senha"
          placeholderColor="#6E6E6C"
          labelFontWeight="600"
          placeholderFontWeight="300"
          fontFamily="Poppins"
          label="Senha"
          placeholder="Insira sua senha"
          expand="block"
          labelColor="#5845DB"
        ></AtnInput>
      </div>
      <AtnButton
     @click="router.push('/formPageTeste')" 
     expand="block"
        >Entrar</AtnButton
      >
      <a class="senha">Esqueci minha senha</a>
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
</script>

<style scoped>
.inputs-login {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  margin-bottom: 31px;
}
.container-pai {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #8538d5;
}
.form {
  padding: 30px 20px 30px;
  border-radius: 32px;
  width: 314px;
  height: 270px;
  background-color: #ffffff;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
.senha {
  font-family: Poppins;
  color: #8538d5;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;
}
button {
  margin-bottom: 26px;
}
</style>

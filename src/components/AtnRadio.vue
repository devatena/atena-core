<template>
  <div class="radio-div">
    <label v-muda-fonte v-muda-cor-da-fonte for="radioDefault">{{
      props.label
    }}</label>
    <div class="radio">
      <input v-muda-background type="radio" id="radioDefault" />
      <span v-muda-fonte v-muda-cor-da-fonte>{{ props.option }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  fontFamily: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  option: {
    type: String,
    default: "",
  },
  fontColor: {
    type: String,
    default: "",
  },
});

const vMudaBackground = {
  beforeMount(el) {
    if (el.checked) {
      el.style.setProperty('--checked-radio', props.backgroundColor);
    }
    el.addEventListener("change", () => {
      if (el.checked) {
        el.style.setProperty('--checked-radio', props.backgroundColor);
      } else {
        el.style.removeProperty('--checked-radio');
      }
    });
  },
};

const vMudaFonte = {
  mounted: (el) => {
    el.style.fontFamily = props.fontFamily;
  },
};

const vMudaCorDaFonte = {
  mounted: (el) => {
    el.style.color = props.fontColor;
  },
};

</script>

<style scoped>
.radio-div {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

input[type="radio"] {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background-color: #fff;
  appearance: none;
  position: relative;
  cursor: pointer;
  margin: 0;
}

input[type="radio"]:checked {
  background-color: #fff;
  border-color: var(--checked-radio, #007bff);
}

input[type="radio"]:checked::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: var(--checked-radio, #007bff);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: var(--checked-radio, #007bff);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
label {
  font-size: 14px;
}
span {
  font-size: 14px;
}
.radio{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
</style>

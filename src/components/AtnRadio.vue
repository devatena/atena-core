<template>
  <div v-muda-gap-label class="radio-div">
    <label v-if="props.label"
      v-muda-fonte-weight-do-label
      v-muda-fonte
      v-muda-cor-da-fonte
      for="radioDefault"
      >{{ props.label }}</label
    >
    <div v-muda-gap-option class="radio">
      <input
        :value="props.value"
        :checked="props.inputValue === props.value"
        @change="$emit('update:inputValue', props.value)"
        v-muda-cor-da-borda
        v-muda-background-ativo
        v-muda-background
        type="radio"
        id="radioDefault"
      />
      <span v-muda-fonte-weight-da-option v-muda-fonte v-muda-cor-da-fonte>{{
        props.option
      }}</span>
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
  backgroundColorActive: {
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
  borderColor: {
    type: String,
    default: "",
  },
  labelFontWeight: {
    type: String,
    default: "",
  },
  optionFontWeight: {
    type: String,
    default: "",
  },
  inputValue: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  labelGap: {
    type: String,
    default: "",
  },
  optionGap: {
    type: String,
    default: "",
  },
});

defineEmits(["update:inputValue"]);

const vMudaBackground = {
  mounted: (el) => {
    el.style.backgroundColor = props.backgroundColor;
  },
};

const vMudaBackgroundAtivo = {
  mounted(el) {
    if (el.checked) {
      el.style.setProperty("--checked-radio", props.backgroundColorActive);
      el.style.borderColor = props.backgroundColorActive;
    } else {
      el.style.borderColor = props.borderColor;
    }
  },
  updated(el) {
    if (el.checked) {
      el.style.setProperty("--checked-radio", props.backgroundColorActive);
      el.style.borderColor = props.backgroundColorActive;
    } else {
      el.style.removeProperty("--checked-radio");
      el.style.borderColor = props.borderColor;
    }
  },
};

const vMudaFonte = {
  mounted: (el) => {
    el.style.fontFamily = props.fontFamily;
  },
};

const vMudaFonteWeightDoLabel = {
  mounted: (el) => {
    el.style.fontWeight = props.labelFontWeight;
  },
};

const vMudaFonteWeightDaOption = {
  mounted: (el) => {
    el.style.fontWeight = props.optionFontWeight;
  },
};

const vMudaCorDaFonte = {
  mounted: (el) => {
    el.style.color = props.fontColor;
  },
};

const vMudaCorDaBorda = {
  mounted: (el) => {
    el.style.borderColor = props.borderColor;
  },
};
const vMudaGapLabel = {
  mounted: (el) => {
    el.style.gap = props.labelGap;
  },
};

const vMudaGapOption = {
  mounted: (el) => {
    el.style.gap = props.optionGap;
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
  background-color: transparent;
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
  font-size: 10px;
}
.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
</style>

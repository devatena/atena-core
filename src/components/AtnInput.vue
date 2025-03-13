<template>
  <div v-muda-gap :class="['', expand]">
    <label
      v-label-fonte-weight
      v-muda-fonte
      v-muda-cor-do-label
      for="inputDefault"
      >{{ props.label }}</label
    >
    <input
      :class="['default', type]"
      v-model="model"
      v-muda-cor-do-placeholder
      v-input-fonte-weight
      v-muda-background
      v-muda-fonte
      v-muda-cor-da-fonte
      id="inputDefault"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  expand: {
    type: String,
    default: "",
  },
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
  fontColor: {
    type: String,
    default: "",
  },
  labelColor: {
    type: String,
    default: "",
  },
  placeholderColor: {
    type: String,
    default: "",
  },
  labelFontWeight: {
    type: String,
    default: "",
  },
  placeholderFontWeight: {
    type: String,
    default: "",
  },
  gap: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "solid",
  },
});

const vMudaGap = {
  mounted: (el) => {
    el.style.gap = props.gap;
  },
};
const vMudaFonte = {
  mounted: (el) => {
    el.style.fontFamily = props.fontFamily;
  },
};

const vMudaBackground = {
  mounted: (el) => {
    el.style.backgroundColor = props.backgroundColor;
  },
};

const vMudaCorDoLabel = {
  mounted: (el) => {
    el.style.color = props.labelColor;
  },
};

const vMudaCorDaFonte = {
  mounted: (el) => {
    el.style.color = props.fontColor;
  },
};

const vMudaCorDoPlaceholder = {
  mounted: (el) => {
    el.style.setProperty("--placeholder-color", props.placeholderColor);
  },
};

const vLabelFonteWeight = {
  mounted: (el) => {
    el.style.fontWeight = props.labelFontWeight;
  },
};

const vInputFonteWeight = {
  mounted: (el) => {
    el.style.setProperty("--placeholder-weight", props.placeholderFontWeight);
  },
};

const model = defineModel();
</script>

<style scoped>
.default {
  background-color: #f3f3f3;
  border-radius: 15px;
  border: none;
  outline: none;
  color: black;
  box-sizing: border-box;
  padding: 10px;
  font-size: 10px;
  width: 100%;
}

.default::placeholder {
  color: var(--placeholder-color, #999);
}

.default::placeholder {
  font-weight: var(--placeholder-weight, 300);
}

.block {
  width: 100%;
}

.icon {
  width: 20px;
}

label {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 10px;
}

div {
  gap: 11px;
  display: flex;
  flex-direction: column;
}
.outline {
  background-color: transparent;
  border: 1px solid rgb(63, 28, 146);
}
</style>

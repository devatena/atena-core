<template>
  <div :class="['', expand]">
    <label v-muda-fonte v-muda-cor-do-placeholder v-muda-cor-do-label for="inputDefault">{{
      props.label
    }}</label>
    <input
      v-muda-cor-do-placeholder
      v-muda-background
      v-muda-fonte
      v-muda-cor-da-fonte
      id="inputDefault"
      class="default"
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
});

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
</style>

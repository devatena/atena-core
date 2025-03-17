import type { DirectiveBinding } from "vue";

export const vMudaCorDoLabel = {
  mounted:(el: HTMLElement, binding: DirectiveBinding ) => {
    el.style.color = binding.value;
  },
};

export const vMudaCorDoPlaceholder = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.style.setProperty("--placeholder-color", binding.value);
  },
};

export const vLabelFonteWeight = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.style.fontWeight = binding.value;
  },
};

export const vInputFonteWeight = {
  mounted: (el: HTMLElement, binding : DirectiveBinding) => {
    el.style.setProperty("--placeholder-weight", binding.value);
  },
};



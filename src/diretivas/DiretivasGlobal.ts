import type { DirectiveBinding } from "vue";

export const vFonteWeight = {
    mounted: (el: HTMLElement, binding: DirectiveBinding) => {
      el.style.fontWeight = binding.value;
    },
  };
  
  export const vMudaCorDaFonte = {
    mounted: (el: HTMLElement, binding: DirectiveBinding) => {
      el.style.color = binding.value;
    },
  };
  
  export const vMudaBackground = {
    mounted: (el: HTMLElement, binding: DirectiveBinding) => {
      el.style.setProperty("--bg-color", binding.value);
    },
  };

export const vMudaCorDaBorda = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.style.borderColor = binding.value;
  },
};

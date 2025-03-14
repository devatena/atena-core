
export const vFonteWeight = {
    mounted: (el, binding) => {
      el.style.fontWeight = binding.value;
    },
  };
  
  export const vMudaCorDaFonte = {
    mounted: (el, binding) => {
      el.style.color = binding.value;
    },
  };
  
  export const vMudaBackground = {
    mounted: (el, binding) => {
      el.style.setProperty("--bg-color", binding.value);
    },
  };
  
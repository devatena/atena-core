
export const vMudaCorDoLabel = {
  mounted:(el, binding) => {
    el.style.color = binding.value;
  },
};

export const vMudaCorDoPlaceholder = {
  mounted: (el, binding) => {
    el.style.setProperty("--placeholder-color", binding.value);
  },
};

export const vLabelFonteWeight = {
  mounted: (el, binding) => {
    el.style.fontWeight = binding.value;
  },
};

export const vInputFonteWeight = {
  mounted: (el, binding) => {
    el.style.setProperty("--placeholder-weight", binding.value);
  },
};

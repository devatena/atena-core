export const vMudaBackgroundAtivo = {
  mounted(el, binding) {
    const { backgroundColorActive, borderColor } = binding.value;
    if (el.checked) {
      el.style.setProperty("--checked-radio", backgroundColorActive);
      el.style.borderColor = backgroundColorActive;
    } else {
      el.style.borderColor = borderColor;
    }
  },
  updated(el, binding) {
    const { backgroundColorActive, borderColor } = binding.value;
    if (el.checked) {
      el.style.setProperty("--checked-radio", backgroundColorActive);
      el.style.borderColor = backgroundColorActive;
    } else {
      el.style.removeProperty("--checked-radio");
      el.style.borderColor = borderColor;
    }
  },
};

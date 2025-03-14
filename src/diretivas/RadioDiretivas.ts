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
  
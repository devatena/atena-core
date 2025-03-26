import { App } from "vue";
import defaultButtonTheme from "./config/buttonTheme";

interface colorsConfig {
  buttonTheme?: Record<
    string,
    { textColor: string; bgColor?: string ; border?: string }
  >;
}

export default {
  install(app: App, options: colorsConfig = {}) {
    const buttonTheme = {
      ...defaultButtonTheme,
      ...(options.buttonTheme || {}),
    };

    const root = document.documentElement;
    
    Object.entries(buttonTheme).forEach(
      ([key, { textColor, bgColor, border }]) => {
        root.style.setProperty(`--${key}-bg-color`, bgColor  ?? "");
        root.style.setProperty(`--${key}-text-color`, textColor);

        if (border) {
          root.style.setProperty(`--${key}-border-color`, border);
        }
      }
    );
    app.provide("buttonTheme", buttonTheme);
  },
};

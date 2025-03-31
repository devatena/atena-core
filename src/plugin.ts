import { App } from "vue";
import DefaultTheme from "./config/DefautTheme";

interface ThemeOptions {
  globalTheme?: Record<string, any>;
}

export default {
  install(app: App, options: ThemeOptions = {}) {
    const GlobalTheme = {
      ...DefaultTheme, 
      ...(options.globalTheme || {}),
    };
    const root = document.documentElement;
    
    Object.entries(GlobalTheme).forEach(
      ([key, { textColor, backgroundColor, border, iconColor }]) => {
        root.style.setProperty(`--${key}-bg-color`, backgroundColor  ?? "");
        root.style.setProperty(`--${key}-text-color`, textColor);

        if (border) {
          root.style.setProperty(`--${key}-border-color`, border);
        }
        if (iconColor) {
          root.style.setProperty(`--${key}-icon-color`, iconColor);
        }
      }
    );
    app.provide("defaultTheme", GlobalTheme);
  },
};

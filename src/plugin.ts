import { App } from "vue";
import DefaultTheme from "./config/DefautTheme";

interface colorsConfig {
  GlobalTheme?: Record<
    string,
    { textColor: string; backgroundColor?: string ; border?: string }
  >;
}

export default {
  install(app: App, options: colorsConfig = {}) {
    const GlobalTheme = {
      ...DefaultTheme, 
      ...(options.GlobalTheme || {}),
    };

    const root = document.documentElement;
    
    Object.entries(GlobalTheme).forEach(
      ([key, { textColor, backgroundColor, border }]) => {
        root.style.setProperty(`--${key}-bg-color`, backgroundColor  ?? "");
        root.style.setProperty(`--${key}-text-color`, textColor);

        if (border) {
          root.style.setProperty(`--${key}-border-color`, border);
        }
      }
    );
    app.provide("defaultTheme", GlobalTheme);
  },
};

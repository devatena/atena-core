import { App } from 'vue';
import defaultButtonTheme from './config/buttonTheme';

export interface MyLibOptions {
  buttonTheme?: Record<string, { textColor: string; bgColor: string }>;
}

export default {
  install(app: App, options: MyLibOptions = {}) {
    const buttonTheme = { ...defaultButtonTheme, ...(options.buttonTheme || {}) };

    const root = document.documentElement;
    Object.entries(buttonTheme).forEach(([key, { textColor, bgColor }]) => {
      root.style.setProperty(`--${key}-bg-color`, bgColor);
      root.style.setProperty(`--${key}-text-color`, textColor);
    });

    app.provide('buttonTheme', buttonTheme);
  }
};

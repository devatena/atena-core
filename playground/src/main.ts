import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import buttonThemePlugin from "../../src/plugin";
import customButtonTheme from "../src/custom/customButtonTheme";

const app = createApp(App)
  .use(router)
  .use(buttonThemePlugin, customButtonTheme);

app.mount("#app");

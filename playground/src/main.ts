import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ThemePlugin from "../../src/plugin";
import globalTheme from "./themes/globalTheme";

const app = createApp(App)
.use(router)
.use(ThemePlugin, { globalTheme });

app.mount("#app");

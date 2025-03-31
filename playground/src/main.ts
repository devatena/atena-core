import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ThemePugin from "../../src";
import globalTheme from "./themes/globalTheme";

const app = createApp(App)
.use(router)
.use(ThemePugin, { globalTheme })

app.mount("#app");

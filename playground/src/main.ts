import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { ThemePlugin } from "atena-core";

const app = createApp(App)
.use(router)
.use(ThemePlugin)
app.mount("#app");

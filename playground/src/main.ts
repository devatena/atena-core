import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "../../dist/atena-core.css"; 
import router from "./router";
import { ThemePlugin } from "atena-core";
import globalTheme from "./styles/themes/globalTheme";

const app = createApp(App)
.use(router)
.use(ThemePlugin, { globalTheme })
app.mount("#app");

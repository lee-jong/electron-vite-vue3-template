import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify/vuetify";
import { loadFonts } from "./plugins/vuetify/webfontloader";
import { createPinia } from "pinia";
const pinia = createPinia();

loadFonts();

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify/vuetify";
import { loadFonts } from "./plugins/vuetify/webfontloader";
import { createPinia } from "pinia";
const pinia = createPinia();

// import soket from "websocket";
// const ClientSoket = soket.w3cwebsocket;
// const ws = new ClientSoket("ws://192.168.217.3:10001");

// ws.onerror = function () {
//   console.log("Connection Error");
// };

// ws.onopen = function () {
//   console.log("WebSocket Client Connected");

//   function sendNumber() {
//     if (ws.readyState === ws.OPEN) {
//       var number = Math.round(Math.random() * 0xffffff);
//       ws.send(number.toString());
//       setTimeout(sendNumber, 1000);
//     }
//   }
//   sendNumber();
// };

// ws.onclose = function () {
//   console.log("echo-protocol Client Closed");
// };

// ws.onmessage = function (e) {
//   if (typeof e.data === "string") {
//     console.log("Received: '" + e.data + "'");
//   }
// };

loadFonts();

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");

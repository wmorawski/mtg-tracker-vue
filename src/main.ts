import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import vuetify from "@/plugins/vuetify";

Vue.use(PiniaVuePlugin);

new Vue({
  router,
  pinia: createPinia(),
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

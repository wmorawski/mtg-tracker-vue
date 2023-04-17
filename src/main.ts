import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import vuetify from "@/plugins/vuetify";
import pinia from "@/plugins/pinia";

import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

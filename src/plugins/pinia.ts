import { createPinia, PiniaVuePlugin } from "pinia";
import Vue from "vue";

const pinia = createPinia();

Vue.use(PiniaVuePlugin);

export default pinia;

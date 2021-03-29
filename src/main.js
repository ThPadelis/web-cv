import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./utils/axios";
import Meta from "vue-meta";
import { BootstrapVue } from "bootstrap-vue";
import VueAxios from "vue-axios";
import VueGtag from "vue-gtag";

import "./styles.scss";
import "./utils/vueFilters";
import store from './store'

Vue.use(
  VueGtag,
  {
    config: { id: "G-4LLG2HXHQD" },
  },
  router
);

Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app", true);

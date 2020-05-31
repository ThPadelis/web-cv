import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles.scss";
import "./utils/vueFilters";
import { BootstrapVue } from "bootstrap-vue";
import { HTTP } from "./utils/axios";
import Meta from "vue-meta";

import VueGtag from "vue-gtag";

Vue.use(
  VueGtag,
  {
    config: { id: "UA-168088174-1" },
  },
  router
);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.prototype.$http = HTTP;
Vue.use(Meta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app", true);

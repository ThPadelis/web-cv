import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles.scss";
import "./utils/vueFilters";
import { BootstrapVue } from "bootstrap-vue";
import { HTTP } from "./utils/axios";
import Meta from "vue-meta";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.prototype.$http = HTTP;
Vue.use(Meta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app", true);

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles.scss";
import "./utils/vueFilters";
import "leaflet/dist/leaflet.css";
import { BootstrapVue } from "bootstrap-vue";
import { HTTP } from "./utils/axios";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.prototype.$http = HTTP;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import RepositoryModule from "./repositories.module";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "web-cv",
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    repos: RepositoryModule,
  },
  plugins: [vuexLocal.plugin],
});

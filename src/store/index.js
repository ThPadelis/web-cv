import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import ArticlesModule from "./articles.module";
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
    articles: ArticlesModule,
  },
  plugins: [vuexLocal.plugin],
});

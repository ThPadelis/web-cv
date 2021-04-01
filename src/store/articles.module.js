import Vue from "vue";
import environment from "../utils/environment";
import Toast from "../utils/toast";

const ArticlesModule = {
  namespaced: true,
  state: () => ({
    items: null,
  }),
  mutations: {
    setItems: (state, payload) => {
      state.items = payload;
    },
  },
  actions: {
    getArticles: ({ commit }) => {
      Vue.$http
        .get(`${environment.devtoBaseURL}/articles`, {
          params: {
            username: "thpadelis",
          },
        })
        .then((response) => {
          commit("setItems", response.data);
        })
        .catch(() => {
          Toast.fire({ icon: "error", title: "Failed to get articles" });
        });
    },
  },
  getters: {
    items: (state) => state.items,
  },
};

export default ArticlesModule;

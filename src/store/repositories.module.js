import Vue from "vue";
import environment from "../utils/environment";
import Toast from "../utils/toast";

const RepositoryModule = {
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
    getRepositories: ({ commit }) => {
      Vue.$http
        .get(`${environment.githubBaseURL}/user/repos`, {
          headers: {
            Authorization: `token ${environment.githubToken}`,
            Accept: "application/vnd.github.v3+json",
          },
          params: {
            per_page: 100,
          },
        })
        .then((response) => {
          commit("setItems", response.data);
        })
        .catch((error) => {
          Toast.fire({ icon: "error", title: "Failed to get repositories" });
          console.log(error.response.data);
        });
    },
  },
  getters: {
    items: (state) => state.items,
  },
};

export default RepositoryModule;

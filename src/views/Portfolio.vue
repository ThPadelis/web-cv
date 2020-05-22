<template>
  <div class="portfolio">
    <section>
      <h2 class="section-title">Portfolio</h2>
      <b-nav class="portfolio-filters">
        <b-nav-text
          v-for="(f, i) in filters"
          :key="i"
          @click="filterBy(f.id)"
          :class="activeFilter === f.id ? 'text-primary border-bottom border-primary' : 'text-muted border-bottom-0'"
        >{{ f.text }}</b-nav-text>
      </b-nav>
    </section>
    <b-container tag="section">
      <b-row v-if="!isLoading">
        <b-col cols="12">
          <b-list-group flush>
            <b-list-group-item v-for="(r, i) in filteredRepos" :key="i">
              <a
                :href="r.html_url"
                target="_blank"
                ref="noopener"
              >{{r.name | replace("-", " ") | capitalize(true)}}</a>
              <div>
                <span>
                  <i class="fas fa-code-branch mr-1"></i>
                  {{r.forks}}
                </span>

                <span>
                  <i class="fas fa-star mr-1"></i>
                  {{r.stargazers_count}}
                </span>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col sm="12" md="12" lg="12" xl="12">
          <loader></loader>
        </b-col>
      </b-row>
    </b-container>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import { metas } from "../utils/metas.js";
export default {
  name: "portfolio",
  components: {
    Loader: () =>
      import(/* webpackChunkName: "loader" */ "@/components/shared/Loader.vue"),
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      )
  },
  data: () => ({
    filters: [
      { id: 1, text: "All" },
      { id: 2, text: "Mine" },
      { id: 3, text: "Collaborator" }
    ],
    activeFilter: 2,
    repos: null,
    filteredRepos: [],
    isLoading: true
  }),
  async mounted() {
    this.repos = await this.getRepos();
    this.filterBy(this.activeFilter);
  },
  methods: {
    filterBy(id) {
      switch (id) {
        case 1:
          this.activeFilter = id;
          this.filteredRepos = [...this.repos];
          break;
        case 2:
          this.activeFilter = id;
          this.filteredRepos = [...this.repos].filter(
            repo => repo.owner.login === process.env.VUE_APP_GITHUB_USER
          );
          break;
        case 3:
          this.activeFilter = id;
          this.filteredRepos = [...this.repos].filter(
            repo => repo.owner.login !== process.env.VUE_APP_GITHUB_USER
          );
          break;
        default:
          this.activeFilter = 1;
          this.filteredRepos = [...this.repos];
          break;
      }
    },
    async getRepos() {
      try {
        this.isLoading = true;
        const { data } = await this.$http.get(
          `${process.env.VUE_APP_BASE_URL}/user/repos`,
          {
            headers: {
              Authorization: `token ${process.env.VUE_APP_GITHUB_API}`
            }
          }
        );
        this.isLoading = false;
        return new Promise(resolve => {
          resolve(data);
        });
      } catch (error) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  },
  metaInfo: {
    // Children can override the title.
    title: metas.portoflio.title,
    // Define meta tags here.
    meta: [
      { name: "description", content: metas.portoflio.description },
      {
        property: "og:title",
        content: "Portfolio ← Padelis Theodosiou | Software Developer"
      },
      {
        property: "og:site_name",
        content: "Padelis Theodosiou | Software Developer"
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: window.location.href
      },
      { property: "og:description", content: metas.portoflio.description },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: window.location.href
      },
      {
        name: "twitter:title",
        content: "Portfolio ← Padelis Theodosiou | Software Developer"
      },
      {
        name: "twitter:description",
        content: metas.portoflio.description
      },
      {
        itemprop: "name",
        content: "Portfolio ← Padelis Theodosiou | Software Developer"
      },
      { itemprop: "description", content: metas.portoflio.description }
    ]
  }
};
</script>

<style lang="scss" scoped>
.border-bottom {
  border-width: 2px !important;
}
</style>
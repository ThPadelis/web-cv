<template>
  <div class="portfolio">
    <section>
      <h2 class="section-title">Portfolio</h2>
      <b-nav class="portfolio-filters">
        <b-nav-text
          v-for="(f, i) in filters"
          :key="i"
          @click="filterBy(f.id)"
          :class="
            activeFilter === f.id
              ? 'text-primary border-bottom border-primary'
              : 'text-muted border-bottom-0'
          "
          >{{ f.text }}</b-nav-text
        >
      </b-nav>
    </section>
    <b-container tag="section">
      <b-row v-if="!isLoading">
        <b-col cols="12">
          <b-list-group flush>
            <b-list-group-item v-for="(r, i) in filteredRepos" :key="i">
              <a :href="r.html_url" target="_blank" ref="noopener">
                {{ r.name | replace("-", " ") | capitalize(true) }}
                <small class="text-secondary" v-if="r.private">(private)</small>
              </a>
              <div>
                <a
                  v-if="r.homepage"
                  :href="r.homepage"
                  target="_blank"
                  ref="noopener"
                  class="badge"
                >
                  <span class="fas fa-link"></span
                ></a>
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
import { mapGetters } from "vuex";
import environment from "../utils/environment.js";
import { metas } from "../utils/metas.js";
export default {
  name: "portfolio",
  components: {
    Loader: () =>
      import(/* webpackChunkName: "loader" */ "@/components/shared/Loader.vue"),
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      ),
  },
  computed: {
    ...mapGetters("repos", {
      items: "items",
    }),
  },
  data: () => ({
    filters: [
      { id: 1, text: "All" },
      { id: 2, text: "Mine" },
      { id: 3, text: "Collaborator" },
    ],
    activeFilter: 2,
    repos: null,
    filteredRepos: [],
    isLoading: false,
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
            (repo) => repo.owner.login === environment.githubUser
          );
          break;
        case 3:
          this.activeFilter = id;
          this.filteredRepos = [...this.repos].filter(
            (repo) => repo.owner.login !== environment.githubUser
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
        const data = this.items;
        this.isLoading = false;
        return new Promise((resolve) => {
          resolve(data);
        });
      } catch (error) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    },
  },
  metaInfo: {
    // Children can override the title.
    title: metas.titles.portfolio,
    // Define meta tags here.
    meta: [
      // Primary Meta Tags
      { name: "description", content: metas.description },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Padelis Theodosiou" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ThPadelis" },
      {
        name: "twitter:title",
        content: "Portfolio ← Padelis Theodosiou | Software Engineer",
      },
      { name: "twitter:description", content: metas.description },
      { name: "twitter:image", content: `${window.location.origin}/me.png` },
      // Open Graph / Facebook
      { name: "og:type", content: "profile" },
      {
        name: "og:title",
        content: "Portfolio ← Padelis Theodosiou | Software Engineer",
      },
      { name: "og:url", content: window.location.href },
      { name: "og:image", content: `${window.location.origin}/me.png` },
      { name: "profile:first_name", content: "Padelis" },
      { name: "profile:last_name", content: "Theodosiou" },
    ],
  },
};
</script>

<style lang="scss" scoped>
.border-bottom {
  border-width: 2px !important;
}
</style>
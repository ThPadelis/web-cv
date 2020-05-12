<template>
  <div class="portfolio">
    <section>
      <h2 class="section-title">Portfolio</h2>
      <b-nav class="portfolio-filters">
        <b-nav-text
          v-for="(f, i) in filters"
          :key="i"
          @click="filterBy(f.id)"
          :class="activeFilter === f.id ? 'text-primary' : 'text-muted'"
        >{{ f.text }}</b-nav-text>
      </b-nav>
    </section>
    <b-container tag="section">
      <b-row>
        <b-col sm="12" md="6" lg="4" xl="4" v-for="(r, i) in filteredRepos" :key="i">
          <portfolio-preview :repo="r"></portfolio-preview>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "portfolio",
  components: {
    PortfolioPreview: () =>
      import(
        /* webpackChunkName: "portfolio-preview" */ "@/components/portfolio/PortfolioPreview.vue"
      )
  },
  data: () => ({
    filters: [
      { id: 1, text: "All" },
      { id: 2, text: "Mine" },
      { id: 3, text: "Collaborator" }
    ],
    activeFilter: 1,
    repos: null,
    filteredRepos: []
  }),
  async mounted() {
    this.repos = await this.getRepos();
    this.filteredRepos = [...this.repos];
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
        const { data } = await this.$http.get("/user/repos");
        return new Promise(resolve => {
          resolve(data);
        });
      } catch (error) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  }
};
</script>

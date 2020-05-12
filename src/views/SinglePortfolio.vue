<template>
  <div class="single-portfolio">
    <section class="d-flex justify-content-between align-items-center">
      <h2 class="section-title">{{repository.name | capitalize}}</h2>
      <router-link></router-link>
    </section>
    <section>
      <pre>{{repository}}</pre>
    </section>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "single-portfolio-item",
  components: {
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      )
  },
  data: () => ({
    repository: null,
    isLoading: true
  }),
  async mounted() {
    await this.getRepository();
  },
  methods: {
    getRepository: async function() {
      let id = this.$route.params.id;
      try {
        this.isLoading = true;
        const { data: repo } = await this.$http.get(`/repositories/${id}`);
        this.repository = repo;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="blog">
    <section>
      <h2 class="section-title">Posts</h2>
      <b-nav class="post-filters">
        <b-nav-text
          @click="sortBy('created_at')"
          :class="sortedBy === 'created_at' ? 'text-primary border-bottom border-primary' : 'text-muted border-bottom-0'"
        >
          Date
          <span class="fa" :class="isSortedBy('created_at')"></span>
        </b-nav-text>
        <b-nav-text
          @click="sortBy('positive_reactions_count')"
          :class="sortedBy === 'positive_reactions_count' ? 'text-primary border-bottom border-primary' : 'text-muted border-bottom-0'"
        >
          Likes
          <span class="fa" :class="isSortedBy('positive_reactions_count')"></span>
        </b-nav-text>
      </b-nav>
    </section>
    <b-container tag="section">
      <b-row v-if="!isLoading">
        <b-col cols="12">
          <b-list-group flush>
            <b-list-group-item v-for="(p,i) of posts" :key="i">
              <a :href="p.canonical_url" target="_blank" ref="noopener">{{p.title}}</a>
              <span>
                <i class="far fa-heart mr-2"></i>
                {{p.positive_reactions_count}}
              </span>
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
import { metas } from "../utils/metas";
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
    isLoading: true,
    isAsc: true,
    sortedBy: "created_at",
    posts: []
  }),
  async mounted() {
    this.posts = await this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        this.isLoading = true;
        const { data } = await this.$http.get(
          `${process.env.VUE_APP_DEV_BASE_URL}/articles?username=thpadelis`
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
    },
    sortBy(property) {
      this.sortedBy = property;
      this.isAsc = !this.isAsc;
      this.posts = this.posts.sort((a, b) => {
        return this.isAsc
          ? a[property] > b[property]
            ? 1
            : -1
          : a[property] < b[property]
          ? 1
          : -1;
      });
    },
    isSortedBy(property) {
      if (this.sortedBy === property) {
        return this.isAsc ? "fa-sort-up" : "fa-sort-down";
      } else {
        return "fa fa-sort";
      }
    }
  },
  metaInfo: {
    title: "Blog",
    meta: [
      { name: "description", content: metas.about.description },
      {
        property: "og:title",
        content: "About me ← Padelis Theodosiou | Software Developer"
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
      { property: "og:description", content: metas.about.description },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: window.location.href
      },
      {
        name: "twitter:title",
        content: "About me ← Padelis Theodosiou | Software Developer"
      },
      {
        name: "twitter:description",
        content: metas.about.description
      },
      {
        itemprop: "name",
        content: "About me ← Padelis Theodosiou | Software Developer"
      },
      { itemprop: "description", content: metas.about.description }
    ]
  }
};
</script>

<style lang="scss" scoped>
.blog {
  section {
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .border-bottom {
    border-width: 2px !important;
  }
}
</style>
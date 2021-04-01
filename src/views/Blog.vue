<template>
  <div class="blog">
    <section>
      <h2 class="section-title">Posts</h2>
      <b-nav class="post-filters">
        <b-nav-text
          @click="sortBy('created_at')"
          :class="
            sortedBy === 'created_at'
              ? 'text-primary border-bottom border-primary'
              : 'text-muted border-bottom-0'
          "
        >
          Date
          <span class="fa" :class="isSortedBy('created_at')"></span>
        </b-nav-text>
        <b-nav-text
          @click="sortBy('positive_reactions_count')"
          :class="
            sortedBy === 'positive_reactions_count'
              ? 'text-primary border-bottom border-primary'
              : 'text-muted border-bottom-0'
          "
        >
          Reactions
          <span
            class="fa"
            :class="isSortedBy('positive_reactions_count')"
          ></span>
        </b-nav-text>
      </b-nav>
    </section>
    <b-container tag="section">
      <b-row v-if="items">
        <b-col cols="12">
          <post v-for="(p, i) in posts" :key="i" :post="p"></post>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "portfolio",
  components: {
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      ),
    Post: () =>
      import(/* webpackChunkName: "post" */ "@/components/blog/Post.vue"),
  },
  computed: {
    ...mapGetters("articles", {
      items: "items",
    }),
  },
  data: () => ({
    isAsc: true,
    sortedBy: "created_at",
    posts: [],
  }),
  created() {
    this.posts = this.items;
  },
  methods: {
    ...mapActions("articles", {
      getItems: "getItems",
    }),
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
    },
  },
  metaInfo: {
    // Children can override the title.
    title: metas.titles.blog,
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
        content: "Blog ← Padelis Theodosiou | Software Engineer",
      },
      { name: "twitter:description", content: metas.description },
      { name: "twitter:image", content: `${window.location.origin}/me.png` },
      // Open Graph / Facebook
      { name: "og:type", content: "profile" },
      {
        name: "og:title",
        content: "Blog ← Padelis Theodosiou | Software Engineer",
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
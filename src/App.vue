<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="12" md="4" lg="3" xl="3">
          <user-card></user-card>
          <featured></featured>
        </b-col>
        <b-col sm="12" md="8" lg="9" xl="9">
          <navbar></navbar>
          <router-view />
        </b-col>
      </b-row>
    </b-container>

    <transition name="fade" mode="out-in">
      <to-top v-if="showBtn" key="1"></to-top>
    </transition>

    <json-ld></json-ld>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "app",
  data: () => ({
    showBtn: false,
  }),
  created() {
    this.getRepositories();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions("repos", {
      getRepositories: "getRepositories",
    }),
    handleScroll() {
      var scrollPos = window.scrollY;
      var winHeight = window.innerHeight;
      var docHeight = document.documentElement.scrollHeight;
      var perc = (100 * scrollPos) / (docHeight - winHeight);

      if (perc > 10) this.showBtn = true;
      else this.showBtn = false;
    },
  },
  components: {
    Navbar: () =>
      import(/* webpackChunkName: "navbar" */ "@/components/shared/Navbar.vue"),

    UserCard: () =>
      import(
        /* webpackChunkName: "user-card" */ "@/components/shared/UserCard.vue"
      ),
    ToTop: () =>
      import(
        /* webpackChunkName: "to-top" */ "@/components/shared/TopArrow.vue"
      ),
    "json-ld": () =>
      import(
        /* webpackChunkName: "json-ld" */ "@/components/shared/JsonLD.vue"
      ),
    Featured: () =>
      import(
        /* webpackChunkName: "featured" */ "@/components/shared/Featured.vue"
      ),
  },
  metaInfo: {
    titleTemplate: "%s ← Padelis Theodosiou | Software Developer",
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 2em;
  padding-bottom: 2em;
}
@media (min-width: 992px) {
  .container {
    padding-top: 5em;
    padding-bottom: 5em;
  }
}
</style>

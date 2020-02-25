<template>
  <b-container>
    <b-row>
      <b-col sm="12" md="4" lg="3" xl="3">
        <user-card></user-card>
      </b-col>
      <b-col sm="12" md="8" lg="9" xl="9">
        <navbar></navbar>
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "app",
  components: {
    Navbar: () =>
      import(/* webpackChunkName: "navbar" */ "@/components/shared/Navbar.vue"),

    UserCard: () =>
      import(
        /* webpackChunkName: "user-card" */ "@/components/shared/UserCard.vue"
      )
  }
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
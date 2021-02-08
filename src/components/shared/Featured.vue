<template>
  <b-card
    no-body
    :img-src="require('@/assets/covid-19.jpg')"
    img-alt="covid-19-dashboard"
    img-top
    class="mb-3"
    v-sticky="{ zIndex: 1, stickyTop: 610.875 }"
  >
    <b-card-body>
      <b-card-title class="text-center">
        <a href="http://padelis.theodosiou.me/apps/covid" target="_blank"
          >Covid Tracker</a
        >
      </b-card-title>
      <b-card-sub-title class="text-center text-muted"
        >Featured Application</b-card-sub-title
      >
    </b-card-body>
  </b-card>
</template>

<script>
import VueSticky from "vue-sticky";
export default {
  directives: {
    sticky: VueSticky,
  },
  name: "featured",
};
</script>

<style lang="scss" scoped>
.card {
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0px;

  img.card-img-top {
    border-radius: 0;
  }

  .card-title {
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: $dark;
      }
    }
  }

  .card-footer {
    border-top: dashed thin $gray-500;
    background: $white;
  }
}
</style>
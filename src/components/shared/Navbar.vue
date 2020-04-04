<template>
  <b-navbar toggleable="lg" type="light" variant="white">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav fill justified class="w-100">
        <b-nav-item
          v-for="(n, i) in navItems"
          :key="i"
          :to="n.to"
          active-class="active-item"
        >
          <span :class="n.icon" class="mr-1"></span>
          <span>{{ n.text }}</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    navItems: [
      { to: "/about", text: "About", icon: "far fa-user" },
      { to: "/resume", text: "Resume", icon: "far fa-file-alt" },
      { to: "/portfolio", text: "Portfolio", icon: "far fa-image" },
      { to: "/blog", text: "Blog", icon: "far fa-comments" },
      { to: "/contact", text: "Contact", icon: "fa fa-map-marker-alt" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.navbar {
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 0;
  margin-bottom: 1.5rem;
  .nav-item {
    &:not(:last-of-type) {
      border-right: dashed thin $gray-500;
    }

    .nav-link {
      // font-size: 1.25em;
      text-transform: uppercase;
      padding: 1.5rem 1.5rem calc(1.5rem - 3px) 1.5rem;
      transition: all ease-in-out 0.25s;

      &:hover,
      &.active-item {
        border-bottom: solid 3px $primary;
        color: $primary;
      }
    }
  }
}
</style>

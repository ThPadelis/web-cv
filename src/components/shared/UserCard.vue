<template>
  <b-card
    no-body
    :img-src="require('@/assets/IMG_4479.jpg')"
    img-alt="me-profile"
    img-top
    class="mb-3"
    v-sticky="{ zIndex: 1, stickyTop: 65 }"
  >
    <b-card-body>
      <b-card-title class="text-center">Padelis Theodosiou</b-card-title>
      <b-card-sub-title class="text-center text-muted"
        >Software Developer</b-card-sub-title
      >
    </b-card-body>
    <b-card-footer>
      <b-nav fill justified>
        <b-nav-item
          v-for="(s, i) in socials"
          :key="i"
          :href="s.to"
          target="_blank"
          :name="s.name"
          :class="s.class"
          rel="noopener"
        >
          <span :class="s.icon" :name="`${s.name}-icon`"></span>
        </b-nav-item>
      </b-nav>
    </b-card-footer>
  </b-card>
</template>

<script>
import VueSticky from "vue-sticky";
export default {
  directives: {
    sticky: VueSticky,
  },
  name: "user-card",
  data: () => ({
    socials: [
      {
        to: "https://github.com/thpadelis",
        icon: "fab fa-github",
        class: "github",
        name: "github-link",
      },
      {
        to: "https://www.linkedin.com/in/padelis-theodosiou/",
        icon: "fab fa-linkedin-in",
        class: "linkedin",
        name: "linkedin-link",
      },
      {
        to: "https://www.facebook.com/padelis.theodosiou",
        icon: "fab fa-facebook",
        class: "facebook",
        name: "facebook-link",
      },
    ],
  }),
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

  .card-footer {
    border-top: dashed thin $gray-500;
    background: $white;
  }

  .nav {
    .nav-item {
      &.github {
        .nav-link {
          color: $gray-600;
          transition: all ease-in-out 0.5s;
          &:hover {
            color: #4078c0;
          }
        }
      }

      &.linkedin {
        .nav-link {
          color: $gray-600;
          transition: all ease-in-out 0.5s;
          &:hover {
            color: #00a0dc;
          }
        }
      }

      &.facebook {
        .nav-link {
          color: $gray-600;
          transition: all ease-in-out 0.5s;
          &:hover {
            color: #3b5998;
          }
        }
      }

      .nav-link {
        span.fab {
          font-size: 1.5em;
        }
      }
    }
  }
}
</style>

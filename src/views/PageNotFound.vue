<template>
  <div class="page-not-found">
    <section class="wrapper">
      <div class="fof">
        <h1 class="display-4">Error 404</h1>
      </div>
    </section>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import { metas } from "../utils/metas";
export default {
  name: "PageNotFound",
  components: {
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      ),
  },
  metaInfo: {
    title: metas.titles.pageNotFound,
    meta: [
      { name: "description", content: metas.description },
      {
        property: "og:title",
        content: "Blog ← Pantelis Theodosiou | Software Developer",
      },
      {
        property: "og:site_name",
        content: "Pantelis Theodosiou | Software Developer",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: window.location.href,
      },
      { property: "og:description", content: metas.description },
      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: window.location.href,
      },
      {
        name: "twitter:title",
        content: "Page not Found ← Pantelis Theodosiou | Software Developer",
      },
      {
        name: "twitter:description",
        content: metas.description,
      },
      {
        itemprop: "name",
        content: "Page not Found ← Pantelis Theodosiou | Software Developer",
      },
      { itemprop: "description", content: metas.description },
    ],
  },
};
</script>


<style lang="scss" scoped>
.page-not-found {
  background: $white;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  section {
    padding: 30px;
    &.bg-gray {
      background: $gray-100;
    }

    &:not(:last-of-type) {
      border-bottom: dashed thin $gray-500;
    }

    h2.section-title {
      font-size: 18px;
      margin-bottom: 0px;
    }

    &.wrapper {
      display: table;
      width: 100%;
      height: 25vh;
      text-align: center;

      .fof {
        display: table-cell;
        vertical-align: middle;
        h1 {
          //   font-size: 50px;
          display: inline-block;
          padding-right: 12px;
          animation: type 0.5s alternate infinite;
        }
      }
    }
  }
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }
  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>
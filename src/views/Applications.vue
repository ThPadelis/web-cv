<template>
  <div class="applications">
    <section>
      <h2 class="applications-title">Applications</h2>
    </section>
    <b-container tag="section">
      <b-row> dassdaasdasd </b-row>
    </b-container>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import { metas } from "../utils/metas";

export default {
  name: "applications",
  data: () => ({
    apps: [{ title: "", url: "/apps" }],
  }),
  components: {
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      ),
  },
  metaInfo: {
    // Children can override the title.
    title: metas.titles.applications,
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
        content: "Applications ← Padelis Theodosiou | Software Engineer",
      },
      { name: "twitter:description", content: metas.description },
      { name: "twitter:image", content: `${window.location.origin}/me.png` },
      // Open Graph / Facebook
      { name: "og:type", content: "profile" },
      {
        name: "og:title",
        content: "Applications ← Padelis Theodosiou | Software Engineer",
      },
      { name: "og:url", content: window.location.href },
      { name: "og:image", content: `${window.location.origin}/me.png` },
      { name: "profile:first_name", content: "Padelis" },
      { name: "profile:last_name", content: "Theodosiou" },
    ],
  },
};
</script>
<template>
  <div class="contact">
    <section>
      <h2 class="section-title">Contact</h2>
    </section>
    <b-container tag="section">
      <b-row>
        <b-col sm="12" md="6" lg="6" xl="6">
          <contact-form></contact-form>
        </b-col>
        <b-col sm="12" md="6" lg="6" xl="6">
          <contact-info></contact-info>
        </b-col>
      </b-row>
    </b-container>
    <section>
      <contact-map></contact-map>
    </section>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import { metas } from "../utils/metas";
export default {
  name: "contact",
  components: {
    ContactForm: () =>
      import(
        /* webpackChunkName: "contact-form" */ "@/components/contact/ContactForm.vue"
      ),
    ContactInfo: () =>
      import(
        /* webpackChunkName: "contact-info" */ "@/components/contact/ContactInfo.vue"
      ),
    ContactMap: () =>
      import(
        /* webpackChunkName: "contact-map" */ "@/components/contact/ContactMap.vue"
      ),
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      ),
  },
  metaInfo: {
    // Children can override the title.
    title: metas.titles.contact,
    // Define meta tags here.
    meta: [
      // Primary Meta Tags
      { name: "description", content: metas.description },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Pantelis Theodosiou" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ThPadelis" },
      {
        name: "twitter:title",
        content: "Contact ← Pantelis Theodosiou | Software Engineer",
      },
      { name: "twitter:description", content: metas.description },
      { name: "twitter:image", content: `${window.location.origin}/me.png` },
      // Open Graph / Facebook
      { name: "og:type", content: "profile" },
      {
        name: "og:title",
        content: "Contact ← Pantelis Theodosiou | Software Engineer",
      },
      { name: "og:url", content: window.location.href },
      { name: "og:image", content: `${window.location.origin}/me.png` },
      { name: "profile:first_name", content: "Pantelis" },
      { name: "profile:last_name", content: "Theodosiou" },
    ],
  },
};
</script>
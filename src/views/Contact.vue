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
      )
  },
  metaInfo: {
    // Children can override the title.
    title: metas.contact.title,
    // Define meta tags here.
    meta: [
      { name: "description", content: metas.contact.description },
      {
        property: "og:title",
        content: "Contact ← Padelis Theodosiou | Software Developer"
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
      { property: "og:description", content: metas.contact.description },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: window.location.href
      },
      {
        name: "twitter:title",
        content: "Contact ← Padelis Theodosiou | Software Developer"
      },
      {
        name: "twitter:description",
        content: metas.contact.description
      },
      {
        itemprop: "name",
        content: "Contact ← Padelis Theodosiou | Software Developer"
      },
      { itemprop: "description", content: metas.contact.description }
    ]
  }
};
</script>
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
  }
};
</script>
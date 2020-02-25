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

<style lang="scss" scoped>
.contact {
  background: $white;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  section {
    padding: 30px;
    &.row {
      padding-left: 15px;
      padding-right: 15px;
    }
    &:not(:last-of-type) {
      border-bottom: dashed thin $gray-500;
    }

    h2.section-title {
      font-size: 18px;
      margin-bottom: 0px;
    }
  }
}
</style>
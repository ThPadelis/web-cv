<template>
  <div>
    <iframe
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=Thessaloniki%2C%20Greece&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      @load="onLoad()"
      v-show="!isLoading"
    ></iframe>
    <app-loader v-if="isLoading"></app-loader>
  </div>
</template>

<script>
export default {
  components: {
    AppLoader: () => import("@/components/shared/Loader.vue")
  },
  name: "contact-map",
  data: () => ({
    isLoading: true
  }),
  methods: {
    onLoad() {
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 500px;
}
</style>

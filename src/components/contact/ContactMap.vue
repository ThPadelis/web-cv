<template>
  <iframe
    id="gmap_canvas"
    src="https://maps.google.com/maps?q=Thessaloniki%2C%20Greece&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
  ></iframe>
</template>

<script>
export default {
  name: "contact-map"
};
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 500px;
}
</style>

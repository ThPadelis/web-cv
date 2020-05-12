<template>
  <b-btn variant="dark" squared @click="onClick()">
    <span class="fa fa-angle-up"></span>
  </b-btn>
</template>

<script>
export default {
  name: "to-top",
  methods: {
    onClick: () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 1100;
}
</style>

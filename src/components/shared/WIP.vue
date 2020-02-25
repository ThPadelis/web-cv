<template>
  <div class="corner-ribbon top-right sticky">
    <span class="fas fa-hard-hat mr-2"></span>
    <span>WIP</span>
  </div>
</template>

<script>
export default {
  name: "work-in-progress"
};
</script>

<style lang="scss" scoped>
.corner-ribbon {
  width: 200px;
  background: $warning;
  position: absolute;
  top: 25px;
  left: -50px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  color: $dark;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  &.sticky {
    position: fixed;
  }

  &.shadow {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }

  &.top-right {
    top: 25px;
    right: -50px;
    left: auto;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
</style>
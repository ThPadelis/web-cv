<template>
  <div class="footer">
    <p>Copyright © {{year}} All right reserved</p>
  </div>
</template>

<script>
export default {
  name: "app-footer",
  data: () => ({ year: new Date().getFullYear() })
};
</script>

<style lang="scss" scoped>
.footer {
  > p {
    margin-bottom: 0;
    text-align: center;
    color: $gray-500;
  }
}
</style>
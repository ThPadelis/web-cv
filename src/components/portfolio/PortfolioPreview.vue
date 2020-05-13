<template>
  <div class="portfolio-preview">
    <div class="portfolio-inner">
      <div class="portfolio-overlay">
        <h3>{{repo.name | replace("-", " ") | capitalize(true)}}</h3>
        <p>{{repo.created_at | moment}}</p>
        <div>
          <router-link :to="`/portfolio/${repo.id}`" class="portfolio-link">
            <span class="fa fa-link"></span>
          </router-link>
        </div>
      </div>
      <img src="https://picsum.photos/350" alt="a" class="img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  props: { repo: { type: Object, required: true } }
};
</script>

<style lang="scss" scoped>
.portfolio-preview {
  margin-bottom: 1em;
  margin-top: 1em;

  .portfolio-inner {
    position: relative;
    overflow: hidden;

    .portfolio-overlay {
      position: absolute;
      color: #fff;
      padding: 25px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      opacity: 0;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;

      &:hover {
        opacity: 1;
        background: rgba($color: #000000, $alpha: 0.75);
      }

      > h3 {
        font-size: 17px;
        margin-bottom: 4px;
      }

      > p {
        font-size: 12px;
        opacity: 0.5;
        margin-bottom: 0;
      }

      .portfolio-link {
        margin: 0 auto;
        text-align: center;
        display: inline-block;
        width: 45px;
        height: 45px;
        padding-top: 12px;
        margin-top: 10px;
        margin-right: 7px;
        color: #ffffff !important;
        border: solid 1px;
        border: solid 1px #a5a5a5;
        text-decoration: none;
      }
    }
  }
}
</style>
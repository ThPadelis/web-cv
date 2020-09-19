<template>
  <div class="post">
    <div class="post__image">
      <img :src="post.social_image" :alt="post.title" class="img-fluid" />
    </div>

    <div class="post__content">
      <h4 class="title">
        <a :href="post.canonical_url" target="_blank" ref="noopener">{{post.title}}</a>
      </h4>
      <p class="subtitle">
        <span>{{post.published_timestamp | moment}}</span>
        <span>{{post.comments_count}} comments</span>
        <span>{{post.tags}}</span>
      </p>

      <p class="content">{{post.description}}</p>

      <b-btn :href="post.canonical_url" target="_blank" ref="noopener" squared>read more</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  .post__image {
    img {
      // height: 325px;
      max-height: 450px;
      width: 100%;
      object-fit: cover;
      margin-bottom: 1.5em;
    }
  }

  .post__content {
    .title {
      font-size: 1.5em;
      line-height: 1.325em;
      font-weight: 700;
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: $primary;
        }
      }
    }

    .subtitle {
      font-size: 1.125em;
      font-weight: 500;
      margin-bottom: 0.55em;
      span {
        &:not(:last-of-type) {
          &::after {
            content: "/";
            margin: 0 5px;
          }
        }

        &:hover {
          color: $primary;
        }
      }
    }

    .content {
      font-size: 1.2em;
      line-height: 1.6em;
      margin-bottom: 0;
    }

    .btn {
      padding: 1em 2.75em;
      margin: 1.5em 0;
      font-weight: 500;
      letter-spacing: 1.3px;
      background: $dark;
      color: $light;
      transition: all 0.25s ease-in-out;

      &:hover {
        background: $primary;
        color: $warning;
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 1.5em;
  }

  &:last-of-type {
    .post__content {
      .btn {
        margin-bottom: 0;
      }
    }
  }
}
</style>
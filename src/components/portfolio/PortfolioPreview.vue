<template>
  <div>
    <div class="portfolio-preview">
      <div class="portfolio-inner">
        <div class="portfolio-overlay">
          <h3>{{repo.name | replace("-", " ") | capitalize(true)}}</h3>
          <p>{{repo.created_at | moment}}</p>
          <div>
            <button v-b-modal="id" class="btn portfolio-link rounded-0">
              <span class="fab fa-github"></span>
            </button>
          </div>
        </div>
        <img :src="require('@/assets/project-image.jpg')" alt="a" class="img-fluid" />
      </div>
    </div>

    <b-modal :id="id" centered size="md">
      <template v-slot:modal-title>
        <h4 class="modal-title">{{name | replace("-", " ") | capitalize(true)}}</h4>
      </template>

      <p class="text-muted" v-if="description">{{description}}</p>

      <p class="info-text" v-if="url">
        <span>URL</span>
        <a :href="url" target="_blank" class="info-link">{{url| website}}</a>
      </p>

      <p class="info-text">
        <span>Stars</span>
        <a
          :href="`https://github.com/${full_name}/stargazers`"
          target="_blank"
          class="info-link"
        >{{stars}}</a>
      </p>

      <p class="info-text">
        <span>Watchers</span>
        <a
          :href="`https://github.com/${full_name}/watchers`"
          target="_blank"
          class="info-link"
        >{{watchers}}</a>
      </p>

      <p class="info-text">
        <span>Language</span>
        <span>{{language | capitalize}}</span>
      </p>

      <template v-slot:modal-footer="{ close }">
        <!-- Emulate built in modal header close button action -->
        <b-button size="sm" variant="outline-primary" @click="close()">Close Modal</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
const { v4: id } = require("uuid");
export default {
  props: { repo: { type: Object, required: true } },
  data: () => ({ id: id() }),
  computed: {
    name: function() {
      return this.repo.name;
    },
    full_name: function() {
      return this.repo.full_name;
    },
    description: function() {
      return this.repo.description;
    },
    url: function() {
      return this.repo.homepage;
    },
    stars: function() {
      return this.repo.stargazers_count;
    },
    watchers: function() {
      return this.repo.watchers_count;
    },
    language: function() {
      return this.repo.language;
    }
  },
  methods: {
    getURL(type, repo) {
      if (type === "stargazers") return `https://github.com/${repo}/stargazers`;
      else if (type === "watchers")
        return `https://github.com/${repo}/watchers`;
      else return "";
    }
  }
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

.modal-content {
  .modal-body {
    p.info-text {
      margin: 0.5em 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      color: $gray-600;
      span:nth-child(1) {
        font-weight: bold;
        color: $dark;
        &::after {
          content: ":";
        }
      }

      a.info-link {
        color: $gray-600;
        text-decoration: none;
      }
    }
  }
}
</style>
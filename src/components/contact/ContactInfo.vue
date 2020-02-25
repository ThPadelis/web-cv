<template>
  <div class="contact-info">
    <h2 class="section-title">Contact Info</h2>
    <b-nav id="basic-info" vertical>
      <b-nav-text v-for="(c,i) in info" :key="i">
        <span>{{c.title | capitalize}}</span>
        <template v-if="c.title === 'Phone'">
          <a :href="`tel:${c.text}`" class="contact-link">{{c.text}}</a>
        </template>
        <template v-else-if="c.title === 'Website'">
          <a :href="c.text" target="_blank" class="contact-link">{{c.text | website}}</a>
        </template>
        <template v-else-if="c.title === 'Email'">
          <a :href="`mailto:${c.text}`" class="contact-link">{{c.text}}</a>
        </template>
        <template v-else-if="c.title === 'Skype'">
          <a :href="c.to" target="_blank" class="contact-link">{{c.text}}</a>
        </template>
        <template v-else>
          <span>{{c.text}}</span>
        </template>
      </b-nav-text>
    </b-nav>

    <b-nav id="social-info">
      <b-nav-item v-for="(s,i) in socials" :key="i" :href="s.to" target="_blank" :class="s.class">
        <span :class="s.icon"></span>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data: () => ({
    info: [
      { title: "Address", text: "Thessaloniki, Greece" },
      { title: "Phone", text: "+306974155996" },
      { title: "Website", text: window.location.origin },
      { title: "Email", text: "padelis.theodosiou@gmail.com" },
      {
        title: "Skype",
        text: "Join me",
        to: "https://join.skype.com/invite/tZORZT9q7vwf"
      }
    ],
    socials: [
      {
        to: "https://github.com/thpadelis",
        icon: "fab fa-github",
        class: "github"
      },
      {
        to: "https://www.linkedin.com/in/padelis-theodosiou/",
        icon: "fab fa-linkedin-in",
        class: "linkedin"
      },
      {
        to: "https://www.facebook.com/padelis.theodosiou",
        icon: "fab fa-facebook",
        class: "facebook"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.contact-info {
  h2.section-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  #basic-info.nav {
    .navbar-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $gray-600;

      span:nth-child(1) {
        font-weight: bold;
        color: $dark;
        &::after {
          content: ":";
        }
      }

      a.contact-link {
        color: $gray-600;
        text-decoration: none;
      }
    }
  }

  #social-info.nav {
    margin: 1rem 0;
    .nav-item {
      &.github {
        .nav-link {
          color: $gray-600;
          transition: all ease-in-out 0.5s;
          &:hover {
            color: #4078c0;
          }
        }
      }

      &.linkedin {
        .nav-link {
          color: $gray-600;
          transition: all ease-in-out 0.5s;
          &:hover {
            color: #00a0dc;
          }
        }
      }

      &.facebook {
        .nav-link {
          color: $gray-600;
          transition: all ease-in-out 0.5s;
          &:hover {
            color: #3b5998;
          }
        }
      }

      .nav-link {
        span.fab {
          font-size: 1.5em;
        }
      }
    }
  }
}
</style>
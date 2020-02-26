<template>
  <div class="about">
    <section>
      <h2 class="section-title">About Me</h2>
    </section>
    <section>
      <personal-info></personal-info>
    </section>
    <section>
      <personal-details></personal-details>
    </section>
    <section>
      <personal-skills
        :skills="technical"
        title="Techical skills"
      ></personal-skills>
    </section>
    <section>
      <personal-skills :skills="soft" title="Soft skills"></personal-skills>
    </section>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import { metas } from "../utils/metas";
export default {
  name: "about",
  components: {
    PersonalInfo: () =>
      import(
        /* webpackChunkName: "personal-info" */ "@/components/about/PersonalInfo.vue"
      ),
    PersonalDetails: () =>
      import(
        /* webpackChunkName: "personal-details" */ "@/components/about/PersonalDetails.vue"
      ),
    PersonalSkills: () =>
      import(
        /* webpackChunkName: "personal-skills" */ "@/components/about/PersonalSkills.vue"
      ),
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      )
  },
  data: () => ({
    technical: [
      { title: "VueJS", value: 80, max: 100 },
      { title: "Angular 2+", value: 70, max: 100 },
      { title: "HTML/(S)CSS", value: 95, max: 100 },
      { title: "NodeJS", value: 65, max: 100 },
      { title: "JavaScript", value: 80, max: 100 },
      { title: "MongoDB", value: 55, max: 100 }
    ],
    soft: [
      { title: "Communication", value: 85, max: 100 },
      { title: "Teamwork", value: 95, max: 100 },
      { title: "Problem solving", value: 85, max: 100 },
      { title: "Accountability", value: 90, max: 100 },
      { title: "Creativity", value: 70, max: 100 }
    ]
  }),
  metaInfo: {
    // Children can override the title.
    title: metas.about.title,
    // Define meta tags here.
    meta: [
      { name: "description", content: metas.about.description },
      {
        property: "og:title",
        content: "About me ← Padelis Theodosiou | Software Developer"
      },
      {
        property: "og:site_name",
        content: "Padelis Theodosiou | Software Developer"
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: window.location.href
      },
      { property: "og:description", content: metas.about.description },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: window.location.href
      },
      {
        name: "twitter:title",
        content: "About me ← Padelis Theodosiou | Software Developer"
      },
      {
        name: "twitter:description",
        content: metas.about.description
      },
      {
        itemprop: "name",
        content: "About me ← Padelis Theodosiou | Software Developer"
      },
      { itemprop: "description", content: metas.about.description }
    ]
  }
};
</script>

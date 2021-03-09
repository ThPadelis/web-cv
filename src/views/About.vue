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
      ),
  },
  data: () => ({
    technical: [
      { title: "VueJS", value: 80, max: 100 },
      { title: "Angular 2+", value: 80, max: 100 },
      { title: "ReactJS", value: 40, max: 100 },
      { title: "HTML/(S)CSS", value: 95, max: 100 },
      { title: "NodeJS", value: 75, max: 100 },
      { title: "JavaScript", value: 90, max: 100 },
      { title: "MongoDB", value: 75, max: 100 },
      { title: "Blockchain", value: 35, max: 100 },
      { title: "Solidity", value: 65, max: 100 },
    ],
    soft: [
      { title: "Communication", value: 85, max: 100 },
      { title: "Teamwork", value: 95, max: 100 },
      { title: "Problem solving", value: 85, max: 100 },
      { title: "Accountability", value: 90, max: 100 },
      { title: "Creativity", value: 70, max: 100 },
    ],
  }),
  metaInfo: {
    // Children can override the title.
    title: metas.titles.about,
    // Define meta tags here.
    meta: [
      // Primary Meta Tags
      { name: "description", content: metas.description },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Padelis Theodosiou" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ThPadelis" },
      {
        name: "twitter:title",
        content: "About ← Padelis Theodosiou | Software Engineer",
      },
      { name: "twitter:description", content: metas.description },
      { name: "twitter:image", content: `${window.location.origin}/me.png` },
      // Open Graph / Facebook
      { name: "og:type", content: "profile" },
      {
        name: "og:title",
        content: "About ← Padelis Theodosiou | Software Engineer",
      },
      { name: "og:url", content: window.location.href },
      { name: "og:image", content: `${window.location.origin}/me.png` },
      { name: "profile:first_name", content: "Padelis" },
      { name: "profile:last_name", content: "Theodosiou" },
    ],
  },
};
</script>

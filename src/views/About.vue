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
      <personal-skills :skills="technical" title="Techical skills"></personal-skills>
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
  })
};
</script>

<style lang="scss" scoped>
.about {
  background: $white;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  section {
    padding: 30px;
    &.bg-gray {
      background: $gray-100;
    }
    &:not(:last-of-type) {
      border-bottom: dashed thin $gray-500;
    }

    h2.section-title {
      font-size: 18px;
      margin-bottom: 0px;
    }
  }
}
</style>
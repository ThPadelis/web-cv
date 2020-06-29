<template>
  <div class="resume">
    <section class="d-flex justify-content-between align-items-center">
      <h2 class="section-title">My Resume</h2>
      <a class="card-link" href="/padelis-theodosiou-cv.pdf" download>Get my CV</a>
    </section>
    <section>
      <timeline icon="fas fa-graduation-cap" :timeline="education"></timeline>
    </section>
    <section>
      <timeline icon="fas fa-briefcase" :timeline="experience"></timeline>
    </section>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import { metas } from "../utils/metas";
import * as moment from "moment";
export default {
  name: "resume",
  data: () => ({
    experience: [
      {
        title: "Software Developer - Athens Technology Center",
        period: [moment("2019-09-09"), moment()],
        description:
          "Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases.\nDelivered and maintained scalable system architecture to support high-availability Internet site with various internal applications.\nMaintained and upgraded products to deliver smooth-running systems.\nCollaborated with other developers to identify and alleviate number of bugs and errors in software.\nEvaluated project requirements and specifications and developed software applications that surpassed client expectations.\nInvolved in the development process of various web applications for European projects.\nUsed innovating technologies and Agile software development methodology."
      },
      {
        title: "Software Developer - Blockachain",
        period: [moment("2019-09-09"), moment("2019-12-15")],
        description:
          "Involved in the development process of various web applications for European projects. Used innovating technologies and Agile software development methodology."
      },
      {
        title: "Software Developer Intern - The Smalls",
        period: [moment("2018-03-01"), moment("2018-08-31")],
        description:
          "The Smalls taught me to surround myself with people who pushed me to my limits. During these couple of months, I developed a number of Windows-based applications using C#, .NET and a couple of web applications using HTML (S)CSS and JavaScript. Also, I was responsible for the maintenance and development of WordPress themes and plugins. The time passed with two brilliant engineers helping me laid the foundation for my software-engineering career. I'm grateful for the time I spent with these folks, whose work gave me a glimpse into the challenges and rewards of a startup employee's life."
      }
    ],
    education: [
      {
        title:
          "BS in Computer Science and Engineering - University of Thessaly",
        period: [moment("2014-10-15"), moment("2019-06-20")],
        description:
          "I'm grateful for these four years away from home. UoT was where I learned how to articulate my ideas, fell in love with learning, participated in meetups for various topics (web technologies, operating systems), developed a number of applications, and discovered a passion for the arts. As a final project, I designed and developed an application based on student and teachers. Through this application, students are able to connect with teachers and find thesis topics much easier and faster."
      },
      {
        title:
          "Diploma in Automotive Engineering - 1st Vocational Senior High School of Alexandroupolis",
        period: [moment("2010-09-15"), moment("2013-09-15")],
        description:
          "I learned how to design and build the mechanics and systems of cars. Through these 3 years, I received theoretical knowledge as well as laboratory work in electrical and mechanical engineering."
      }
    ]
  }),
  components: {
    Timeline: () =>
      import(
        /* webpackChunkName: "timeline" */ "@/components/shared/Timeline.vue"
      ),
    AppFooter: () =>
      import(
        /* webpackChunkName: "app-footer" */ "@/components/shared/Footer.vue"
      )
  },
  metaInfo: {
    // Children can override the title.
    title: metas.titles.resume,
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
        content: "Resume ← Padelis Theodosiou | Software Engineer"
      },
      { name: "twitter:description", content: metas.description },
      { name: "twitter:image", content: `${window.location.origin}/me.jpg` },
      // Open Graph / Facebook
      { name: "og:type", content: "profile" },
      {
        name: "og:title",
        content: "Resume ← Padelis Theodosiou | Software Engineer"
      },
      { name: "og:url", content: window.location.href },
      { name: "og:image", content: `${window.location.origin}/me.jpg` },
      { name: "profile:first_name", content: "Padelis" },
      { name: "profile:last_name", content: "Theodosiou" }
    ]
  }
};
</script>

<style lang="scss" scoped>
section:first-of-type {
  display: flex;
  justify-content: space-between;
  align-items: center;

  a.card-link {
    color: $dark;
    border-bottom: solid 2px transparent;
    &:hover {
      color: $primary;
      border-bottom-color: $primary;
    }
  }
}
</style>
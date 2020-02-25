<template>
  <div class="about">
    <section>
      <h2 class="section-title">My Resume</h2>
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
import * as moment from "moment";
export default {
  name: "resume",
  data: () => ({
    experience: [
      {
        title: "Software Developer - Blockachain",
        period: [moment("2019-09-09"), moment()],
        description:
          "Involved in the development process of various web applications for European projects. "
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
  }
};
</script>

<style lang="scss" scoped>
.about {
  background: $white;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  section {
    padding: 30px;
    border-bottom: dashed thin $gray-500;
    &.bg-gray {
      background: $gray-100;
    }

    h2.section-title {
      font-size: 18px;
      margin-bottom: 0px;
    }
  }
}
</style>
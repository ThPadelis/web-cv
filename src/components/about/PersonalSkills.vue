<template>
  <b-container class="px-0">
    <b-row>
      <b-col sm="12" md="12" lg="12" xl="12">
        <h2 class="personal-title">{{title | capitalize}}</h2>
      </b-col>
      <b-col sm="12" md="6" lg="6" xl="6" v-for="(s,i) in skills" :key="i">
        <p class="mb-0">{{s.title}}</p>
        <b-progress variant="primary" :value="s.value" :max="s.max"></b-progress>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "personal-skills",
  props: {
    title: { type: String, required: true },
    skills: { type: Array, required: true }
  }
};
</script>
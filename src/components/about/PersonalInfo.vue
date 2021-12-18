<template>
  <b-row>
    <b-col sm="6" md="6" lg="4" xl="4" v-for="(v, i) in info" :key="i">
      <p class="info-text">
        <span class="mr-2">{{ v.title | capitalize }}</span>
        <template v-if="v.title === 'Birthday'">
          <span>{{ v.text | moment }}</span>
        </template>
        <template v-else-if="v.title === 'Website'">
          <a :href="v.text" target="_blank" class="info-link" rel="noopener">{{
            v.text | website
          }}</a>
        </template>
        <template v-else-if="v.title === 'Email'">
          <a :href="`mailto:${v.text}`" class="info-link">{{ v.text }}</a>
        </template>
        <template v-else-if="v.title === 'Skype'">
          <a :href="v.to" target="_blank" class="info-link" rel="noopener">{{
            v.text
          }}</a>
        </template>
        <template v-else>
          <span>{{ v.text }}</span>
        </template>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "personal-info",
  data: () => ({
    info: [
      { title: "Full name", text: "Pantelis Theodosiou" },
      { title: "Birthday", text: new Date(1995, 10, 19, 12, 30) },
      { title: "Job", text: "Software Developer" },
      { title: "Website", text: window.location.origin },
      { title: "Email", text: "padelis.theodosiou@gmail.com" },
      {
        title: "Skype",
        text: "Join me",
        to: "https://join.skype.com/invite/tZORZT9q7vwf",
      },
    ],
  }),
};
</script>
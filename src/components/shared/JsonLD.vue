<template>
  <script v-html="jsonLd" type="application/ld+json"></script>
</template>

<script>
export default {
  data: () => ({
    jsonLd: {
      "@context": "https://schema.org/",
      "@type": "Person",
      name: "Pantelis Theodosiou",
      url: "http://padelis.theodosiou.me",
      image:
        "https://avatars0.githubusercontent.com/u/33872406?s=460&u=e622606904b57f6362a114ad98fb12490d76b381&v=4",
      sameAs: [
        "https://www.facebook.com/theodosiou.pantelis/",
        "https://twitter.com/ThPadelis",
        "https://www.instagram.com/theodosiou_pantelis/",
        "https://www.linkedin.com/in/pantelis-theodosiou/",
        "https://github.com/thpadelis"
      ],
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Athens Technology Center"
      }
    }
  })
};
</script>
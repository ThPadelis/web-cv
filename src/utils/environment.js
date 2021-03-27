export default {
  devtoBaseURL: process.env.VUE_APP_DEV_BASE_URL || "https://dev.to/api",
  githubUser: process.env.VUE_APP_GITHUB_USER || "ThPadelis",
  githubBaseURL: process.env.VUE_APP_BASE_URL || "https://api.github.com",
  githubToken:
    process.env.VUE_APP_GITHUB_API ||
    "939e0dd2ecea94d0f7f165d6fbdc3d9d68d4c219",
  emailjsInit: process.env.VUE_APP_EMAILJS_INIT || "user_cDccGRQtDhrwbitq3Ht9q",
  emailjsService: process.env.VUE_APP_EMAILJS_SERVICE || "service_e1yl9u5",
  emailjsTemplate: process.env.VUE_APP_EMAILJS_TEMPLATE || "template_6tnj9zb",
};

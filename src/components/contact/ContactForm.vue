<template>
  <div class="contact-form">
    <h2 class="section-title">Contact Form</h2>
    <b-form @submit.prevent="onSubmit()">
      <b-form-group>
        <b-form-input
          type="text"
          v-model="contact.name"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          type="email"
          v-model="contact.email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-textarea
          :rows="8"
          spellcheck
          v-model="contact.message"
          placeholder="Message"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-btn
        class="w-50 mb-3"
        variant="primary"
        type="submit"
        :disabled="!canSubmitted"
        >Send a message</b-btn
      >
    </b-form>
  </div>
</template>

<script>
import { init, send } from "emailjs-com";
import Toast from "../../utils/toast";
import environment from "../../utils/environment";

export default {
  name: "contact-form",
  data: () => ({
    contact: {
      name: "",
      email: "",
      message: "",
    },
  }),
  mounted() {
    init(environment.emailjsInit);
  },
  computed: {
    canSubmitted() {
      const { name, email, message } = this.contact;
      const hasName = name.trim().length > 0;
      const hasValidEmail = email.trim().length > 0 && this.isValidEmail(email);
      const hasMessage = message.trim().length > 0;
      return hasName && hasValidEmail && hasMessage;
    },
  },
  methods: {
    async onSubmit() {
      try {
        await send(environment.emailjsService, environment.emailjsTemplate, {
          name: this.contact.name,
          message: this.contact.message,
          reply_to: this.contact.email,
        });

        Toast.fire({ icon: "success", title: "Thanks for your message!" });

        this.contact = { name: "", email: "", message: "" };
      } catch (error) {
        // console.log(error);
        Toast.fire({ icon: "error", title: error.toString() });
      }
    },
    isValidEmail(value) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    },
  },
};
</script>

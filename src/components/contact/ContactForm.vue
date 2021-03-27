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

      <b-btn class="w-50 mb-3" variant="primary" type="submit"
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
        console.log(error);
        Toast.fire({ icon: "error", title: error.toString() });
      }
    },
  },
};
</script>

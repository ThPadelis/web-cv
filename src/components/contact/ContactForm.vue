<template>
  <div class="contact-form">
    <h2 class="section-title">Contact Form</h2>
    <b-form @submit.prevent="onSubmit()">
      <b-form-group>
        <b-form-input type="text" v-model="contact.name" placeholder="Name" required></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input type="email" v-model="contact.email" placeholder="Email" required></b-form-input>
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

      <b-btn class="w-50 mb-3" variant="primary" type="submit">Send a message</b-btn>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data: () => ({
    contact: {
      name: "",
      email: "",
      message: ""
    }
  }),
  methods: {
    onSubmit() {}
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  h2.section-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  form {
    .form-group {
      margin: 1rem 0;
      &:first-of-type {
        margin-top: 0;
      }

      input.form-control,
      textarea.form-control {
        padding: 0 5px;
        height: 3rem;
        border: solid thin $gray-500;
        box-shadow: none;

        &:focus {
          box-shadow: none;
        }
      }
      textarea.form-control {
        height: auto;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }

    button.btn {
      border-radius: 0px;
      box-shadow: none;
      background: lighten($color: $primary, $amount: 10%);
      &:hover {
        background: $primary;
      }
    }
  }
}
</style>
let code = {}
code.basic = `\
<template>
  <vb-form>
    <vb-form-item label="Name">
      <vb-input placeholder="Text Input"></vb-input>
    </vb-form-item>

    <vb-form-item label="Username" :color="msg.username.color" :message="msg.username.text">
      <vb-input
        placeholder="Text Input"
        prefix="fa fa-user"
        suffix="fa fa-check"
        color="success"
        v-model="username"
      >
      </vb-input>
    </vb-form-item>

    <vb-form-item label="Email">
      <vb-input placeholder="Text Input" :color="msg.email.color" v-model="email">
        <i slot="prefix" class="fa fa-envelope" aria-hidden="true"></i>
        <i slot="suffix" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
      </vb-input>

      <p slot="message" :class="\`help is-\${msg.email.color}\`">{{msg.email.text}}</p>
    </vb-form-item>

    <vb-form-item label="City">
      <vb-select v-model="city">
        <option :value="1">Old Town</option>
        <option :value="2">New Town</option>
      </vb-select>
    </vb-form-item>

    <vb-form-item label="Message">
      <vb-textarea placeholder="Textarea" v-model="message"></vb-textarea>
    </vb-form-item>

    <vb-form-item>
      <vb-checkbox v-model="agree">
        I agree to the <a href="#">terms and conditions</a>
      </vb-checkbox>
    </vb-form-item>

    <vb-form-item grouped align="right">
      <vb-button color="link" @click="confirm">Confirm</vb-button>
      <vb-button color="light" @click="reset">Reset</vb-button>
    </vb-form-item>
  </vb-form>
</template>

<script>
  export default {
    data() {
      return {
        msg: {
          username: {
            text: 'This username is available',
            color: 'success'
          },
          email: {
            text: 'This email is invalid',
            color: 'danger'
          }
        },
        username: 'bulma',
        email: 'hello@',
        city: 2,
        message: 'Hi',
        gender: 2,
        agree: false
      }
    },
    methods: {
      reset() {
        this.username = ''
        this.email = ''
        this.city = 2
        this.message = ''
        this.gender = 2
      },
      confirm() {}
    }
  }
</script>
`

export default code

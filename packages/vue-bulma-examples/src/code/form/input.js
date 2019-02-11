let code = {}

code.basic = `\
<vb-input></vb-input>
`

code.colors = `\
<vb-input color="primary" placeholder="Primary"></vb-input>

<vb-input color="info" placeholder="Info"></vb-input>

<vb-input color="success" placeholder="Success"></vb-input>

<vb-input color="warning" placeholder="Warning"></vb-input>

<vb-input color="danger" placeholder="Danger"></vb-input>

<vb-input color="white" placeholder="White"></vb-input>

<vb-input color="light" placeholder="Light"></vb-input>

<vb-input color="dark" placeholder="Dark"></vb-input>

<vb-input color="black" placeholder="Black"></vb-input>

<vb-input color="link" placeholder="Link"></vb-input>
`

code.sizes = `\
<vb-input size="small" placeholder="Small"></vb-input>

<vb-input placeholder="Normal"></vb-input>

<vb-input size="medium" placeholder="Medium"></vb-input>

<vb-input size="large" placeholder="Large"></vb-input>
`

code.rounded = `\
<vb-input rounded placeholder="Rounded"></vb-input>
`

code.states = `\
<vb-input placeholder="Normal"></vb-input>

<vb-input state="hovered" placeholder="Hovered"></vb-input>

<vb-input state="focused" placeholder="Focus"></vb-input>

<vb-input placeholder="Loading" loading></vb-input>

<vb-input placeholder="Disabled" disabled></vb-input>

<vb-input value="This text is readonly" placeholder="Disabled" readonly></vb-input>

<vb-input value="Static: me@example.com" static readonly></vb-input>
`

code.icon = `\
<vb-input prefix="fa fa-envelope" suffix="fa fa-check" placeholder="Small" size="small"></vb-input>

<vb-input prefix="fa fa-envelope" suffix="fa fa-check" placeholder="Normal"></vb-input>

<vb-input prefix="fa fa-envelope" suffix="fa fa-check" placeholder="Medium" size="medium"></vb-input>

<vb-input prefix="fa fa-envelope" suffix="fa fa-check" placeholder="Large" size="large"></vb-input>

<vb-input placeholder="Style icon" size="large">
  <vb-icon slot="prefix" color="info" name="fa fa-envelope"></vb-icon>
  <vb-icon slot="suffix" color="success" name="fa fa-check"></vb-icon>
</vb-input>
`

code.events = `\
<template>
  <div>
    Value: <strong>{{value}}</strong>
    <br>
    State: <strong>{{placeholder}}</strong>
    <vb-input v-model="value" @focus="handleFocus" @blur="handleBlur"></vb-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        placeholder: 'Input blured!'
      }
    },
    methods: {
      change(value) {
        this.value = value
      },
      handleFocus() {
        this.placeholder = 'Input focused!'
      },
      handleBlur() {
        this.placeholder = 'Input blurred!'
      }
    }
  }
  </script>
`

export default code

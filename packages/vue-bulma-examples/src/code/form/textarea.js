let code = {}

code.basic = `\
<vb-textarea placeholder="Basic"></vb-textarea>

<vb-textarea rows="2" placeholder="2 lines of textarea"></vb-textarea>
`

code.colors = `\
<vb-textarea color="primary" rows="2" placeholder="Primary textarea"></vb-textarea>

<vb-textarea color="info" rows="2" placeholder="Info textarea"></vb-textarea>

<vb-textarea color="success" rows="2" placeholder="Success textarea"></vb-textarea>

<vb-textarea color="warning" rows="2" placeholder="Warning textarea"></vb-textarea>

<vb-textarea color="danger" rows="2" placeholder="Danger textarea"></vb-textarea>

<vb-textarea color="white" rows="2" placeholder="White textarea"></vb-textarea>

<vb-textarea color="light" rows="2" placeholder="Light textarea"></vb-textarea>

<vb-textarea color="dark" rows="2" placeholder="Dark textarea"></vb-textarea>

<vb-textarea color="black" rows="2" placeholder="Black textarea"></vb-textarea>

<vb-textarea color="link" rows="2" placeholder="Link textarea"></vb-textarea>
`

code.sizes = `\
<vb-textarea size="small" rows="2" placeholder="Small"></vb-textarea>

<vb-textarea rows="2" placeholder="Normal"></vb-textarea>

<vb-textarea size="medium" rows="2" placeholder="Medium"></vb-textarea>

<vb-textarea size="large" rows="2" placeholder="Large"></vb-textarea>
`

code.states = `\
<vb-textarea placeholder="Normal" rows="2"></vb-textarea>

<vb-textarea placeholder="Hover" state="hovered" rows="2"></vb-textarea>

<vb-textarea placeholder="Focus" state="focused" rows="2"></vb-textarea>

<vb-textarea placeholder="Loading" loading rows="2"></vb-textarea>

<vb-textarea placeholder="Disabled" disabled rows="2"></vb-textarea>

<vb-textarea value="Read only" readonly rows="2"></vb-textarea>

<vb-textarea placeholder="Fixed Size" :resize="false" rows="2"></vb-textarea>
`

code.loading = `\
<vb-textarea size="small" rows="2" placeholder="Small loading textarea" loading></vb-textarea>

<vb-textarea rows="2" placeholder="Normal loading textarea" loading></vb-textarea>

<vb-textarea size="medium" rows="2" placeholder="Medium loading textarea" loading></vb-textarea>

<vb-textarea size="large" rows="2" placeholder="Large loading textarea" loading></vb-textarea>
`

code.events = `\
<template>
  <div>
    Value: <strong>{{value}}</strong>
    <br>
    State: <strong>{{placeholder}}</strong>

    <vb-textarea
      autofocus
      placeholder="Max 5 Character"
      v-model="value"
      :maxlength="5"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    </vb-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    change(value) {
      this.value = value
    },
    handleFocus() {
      this.placeholder = 'Textarea focused!'
    },
    handleBlur() {
      this.placeholder = 'Textarea blurred!'
    }
  }
}
</script>
`

export default code

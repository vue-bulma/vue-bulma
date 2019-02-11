let code = {}

code.basic = `\
<vb-checkbox>Remember me</vb-checkbox>

<vb-checkbox>
  I agree to the <a href="#">terms and conditions</a>
</vb-checkbox>

<vb-checkbox disabled>
  Save my preferences
</vb-checkbox>
`

code.group = `\
<template>
  <vb-checkbox-group v-model="animals" @change="handleChange">
    <vb-checkbox label="dog">Dog</vb-checkbox>
    <vb-checkbox label="cat">Cat</vb-checkbox>
    <vb-checkbox label="mouse">Mouse</vb-checkbox>
    <vb-checkbox label="panda">Panda</vb-checkbox>
  </vb-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        animals: []
      }
    },
    methods: {
      handleChange(val) {}
    }
  }
</script>
`

code.events = `\
<template>
  <div>
    I'm <strong>{{checked ? 'ok' : 'not ok'}}</strong>.
    <br>
    This Checkbox <strong>{{ focused ? 'Focused' : 'Blurred' }}</strong>

    <vb-checkbox v-model="checked" @focus="handleFocus" @blur="handleBlur">Are You OK</vb-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        focused: false
      }
    },
    methods: {
      handleFocus() {
        this.focused = true
      },
      handleBlur() {
        this.focused = false
      }
    }
  }
</script>
`

export default code

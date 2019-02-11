let code = {}

code.basic = `\
<vb-radio>Basic</vb-radio>

<vb-radio disabled>Disabled</vb-radio>
`

code.events = {}

code.events.block = `\
<template>
  <div>
    Gender: <strong>{{gender}}</strong>

    <div class="block">
      <vb-radio :label="1" v-model="gender">Female</vb-radio>
      <vb-radio :label="2" v-model="gender">Male</vb-radio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gender: 1
      }
    }
  }
</script>
`

code.events.group = `\
<template>
  <div>
    Group gender: <strong>{{gender}}</strong>

    <vb-radio-group v-model="gender" @change="handleChange">
      <vb-radio :label="1">Female</vb-radio>
      <vb-radio :label="2">Male</vb-radio>
    </vb-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: 2
    }
  },
  methods: {
    handleChange(val) {}
  }
}
</script>
`

export default code

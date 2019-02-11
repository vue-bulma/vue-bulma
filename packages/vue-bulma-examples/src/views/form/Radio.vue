<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-radio>Basic</vb-radio>
        <vb-radio disabled>Disabled</vb-radio>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo :code="code.events.block">
        <div class="block" slot="control">
          Gender: <strong>{{ gender }}</strong>
        </div>

        <div class="block">
          <vb-radio :label="1" v-model="gender">Female</vb-radio>
          <vb-radio :label="2" v-model="gender">Male</vb-radio>
        </div>
      </demo>

      <vb-subtitle size="6">Radio Group</vb-subtitle>
      <demo :code="code.events.group">
        <div class="block" slot="control">
          Gender: <strong>{{ gender2 }}</strong>
        </div>

        <vb-radio-group v-model="gender2" @change="handleChange">
          <vb-radio :label="1">Female</vb-radio>
          <vb-radio :label="2">Male</vb-radio>
        </vb-radio-group>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/form/radio.js'

export default {
  name: 'Radio',
  data() {
    return {
      code,
      gender: 1,
      gender2: 2
    }
  },
  methods: {
    handleChange() {}
  }
}
</script>

<template>
  <div class="control">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-radio-group',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {}
  }
}
</script>

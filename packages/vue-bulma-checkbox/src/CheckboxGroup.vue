<template>
  <div class="control">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-checkbox-group',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

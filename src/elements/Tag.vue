<template>
  <span class="tag" :class="classes">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: value => ['primary', 'info', 'success', 'warning', 'danger', 'white', 'light', 'dark', 'black'].includes(value)
    },
    size: {
      type: String,
      validator: value => ['medium', 'large'].includes(value)
    }
  },

  computed: {
    classes () {
      const { type, size } = this
      const obj = {
        [`is-${type}`]: !!type,
        [`is-${size}`]: !!size
      }
      return  obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/other';
</style>

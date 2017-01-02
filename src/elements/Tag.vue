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
      validator: value => ['dark', 'primary', 'info', 'success', 'warning', 'danger'].includes(value)
    },
    size: {
      type: String,
      validator: value => ['small', 'medium', 'large'].includes(value)
    }
  },

  computed: {
    classes () {
      const { type } = this
      const obj = {
        [`is-${type}`]: !!type
      }
      return  obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/other.sass';
</style>

<template>
  <span class="icon" :class="classes">
    <i :class="type">
      <slot></slot>
    </i>
  </span>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    type: {
      type: String
    }
  },

  computed: {
    classes () {
      const { size } = this
      const obj = {
        [`is-${size}`]: !!size
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button';
@import '~bulma/sass/elements/other';
</style>

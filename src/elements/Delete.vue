<template>
  <button class="delete" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      validator: value => ['small', 'medium', 'large'].includes(value)
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
@import '~bulma/sass/elements/other';
</style>

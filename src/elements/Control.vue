<template>
  <div class="control" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    hasIcon: Boolean,
    hasIconRight: Boolean
  },

  computed: {
    classes () {
      const { hasIcon, hasIconRight } = this
      const obj = {
        'has-icon': hasIcon,
        'has-icon-right': hasIconRight
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/elements/other.sass';
</style>

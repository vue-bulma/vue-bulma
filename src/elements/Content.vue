<template>
  <div class="content" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      validator: value => ['medium', 'large'].includes(value)
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
@import '~bulma/sass/elements/content.sass';
</style>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
      validator: value => ['primary', 'info', 'success', 'warning', 'danger', 'link'].includes(value)
    },
    size: {
      type: String,
      default: '',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    style: {
      type: String,
      default: '',
      validator: value => ['outlined', 'inverted'].includes(value)
    },
    state: {
      type: String,
      default: '',
      validator: value => ['loading', 'active', 'disabled'].includes(value)
    }
  },

  computed: {
    classes () {
      const { type, size, style, state } = this

      return {
        button: true,
        [`is-${type}`]: !!type,
        [`is-${size}`]: !!size,
        [`is-${style}`]: !!style,
        [`is-${state}`]: !!state
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/elemens/button.sass';
</style>

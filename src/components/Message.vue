<template>
  <article class="message" :class="classes">
    <div class="message-header">
      <slot name="message-header"></slot>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: value => ['dark', 'primary', 'info', 'success', 'warning', 'danger'].includes(value)
    }
  },

  computed: {
    classes () {
      const { type } = this
      const obj = {
        [`is-${type}`]: !!type
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/message.sass';
</style>

<script>
import Vue from 'vue'

const Subtitle = Vue.component('vue-bulma-subtitle', {
  props: {
    level: {
      type: Number,
      default: 1,
      validator: value => [1, 2, 3, 4, 5, 6].includes(value)
    },
    size: {
      type: Number,
      validator: value => [1, 2, 3, 4, 5, 6].includes(value)
    }
  },

  render (h) {
    const { level, size } = this
    return h(`h${level}`, {
      'class': {
        subtitle: true,
        [`is-${size}`]: !!size
      }
    }, this.$slots.default)
  }
})

export default Subtitle
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/title.sass';
</style>

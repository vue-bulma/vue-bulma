<script>
import Vue from 'vue'

const Title = Vue.component('vue-bulma-title', {
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
        title: true,
        [`is-${size}`]: !!size
      }
    }, this.$slots.default)
  }
})

export default Title
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/title.sass';
</style>

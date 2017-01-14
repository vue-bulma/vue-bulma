<script>
import Vue from 'vue'

const LevelItem = Vue.component('vue-bulma-level-item', {
  props: {
    element: {
      type: String,
      default: 'div',
      validator: value => ['p', 'div'].includes(value)
    },
    aligned: {
      type: String,
      default: undefined,
      validator: value => !value || ['left', 'right', 'center'].includes(value)
    },
  },

  render (createElement) {
    const { element, aligned } = this
    return createElement(element, {
      'class': {
        'level-item': true,
        [`has-text-${aligned}`]: !!aligned
      }
    }, this.$slots.default)
  }
})

export default LevelItem
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/level';
</style>

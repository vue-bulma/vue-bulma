<script>
import Vue from 'vue'

const Level = Vue.component('vue-bulma-level', {
  props: {
    element: {
      type: String,
      default: 'nav',
      validator: value => ['nav', 'div'].includes(value)
    }
  },

  render (createElement) {
    const { element } = this
    const items = []
    const lItems = []
    const rItems = []

    if (this.$slots.left) {
      this.$slots.left.map(function (node) {
        lItems.push(node.children)
      })

      items.push(createElement('div', { 'class': 'level-left' }, lItems))
    }

    items.push(this.$slots.default)

    if (this.$slots.right) {
      this.$slots.right.map(function (node) {
        rItems.push(node.children)
      })

      items.push(createElement('div', { 'class': 'level-right' }, rItems))
    }

    return createElement(element, { 'class': 'level' }, items)
  }
})

export default Level
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/level.sass';

.level-item {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
</style>

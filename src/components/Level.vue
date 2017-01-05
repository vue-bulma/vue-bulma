<script>
import Vue from 'vue'

const createLevelItems = function (createElement, vNodes) {
  if (!vNodes) return

  let items = []

  vNodes.map(function (vNode) {
    if (!!vNode.children) {
      let aligned = (!!vNode.data && !!vNode.data.attrs)
            ? vNode.data.attrs.aligned
            : undefined

      items.push(createElement(vNode.tag, {
        'class': {
          'level-item': true,
          [`has-text-${aligned}`]: !!aligned
        }
      }, vNode.children))
    }
  })

  return items
}

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
    let levelItems = []

    if (this.$slots.left) {
      let items = []

      this.$slots.left.map(function (node) {
        items.push(createLevelItems(createElement, node.children))
      })

      levelItems.push(createElement('div', { 'class': 'level-left' }, items))
    }

    if (this.$slots.default) {
      levelItems.push(createLevelItems(createElement, this.$slots.default))
    }

    if (this.$slots.right) {
      let items = []

      this.$slots.right.map(function (node) {
        items.push(createLevelItems(createElement, node.children))
      })

      levelItems.push(createElement('div', { 'class': 'level-right' }, items))
    }

    return createElement(element, { 'class': 'level' }, levelItems)
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

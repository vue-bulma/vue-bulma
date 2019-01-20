import './style.scss'
import { addClass } from 'vue-bulma-common/src/utils'

export default {
  props: {
    vertical: Boolean,
    size: {
      type: [Number, String],
      validator(value) {
        return +value >= 1 && +value <= 12
      }
    }
  },
  computed: {
    isAncestor() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'vb-tile') {
        parent = parent.$parent
      }
      return !parent
    }
  },
  render(h) {
    const { vertical, isAncestor, size } = this
    const { default: nodes = [] } = this.$slots
    const children = nodes.map(vnode => {
      if (!this.isChild(vnode)) return vnode

      addClass(vnode, 'tile is-child')
      return h('div', { class: 'tile is-parent' }, [vnode])
    })

    const classes = {
      class: {
        tile: true,
        'is-ancestor': isAncestor,
        'is-vertical': vertical,
        [`is-${size}`]: !!size
      }
    }

    return h('div', classes, children)
  },
  methods: {
    isChild(vnode) {
      if (!vnode || !vnode.componentOptions) return

      const { tag } = vnode.componentOptions
      return !tag || tag !== 'vb-tile'
    }
  }
}

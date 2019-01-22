export default {
  name: 'vb-menu',
  provide() {
    return {
      rootMenu: this
    }
  },
  props: {
    actived: [String, Number],
    defaultOpen: Array
  },
  render(h) {
    const content = this.renderContent(h)
    return h('aside', { class: 'menu' }, content)
  },
  methods: {
    renderContent(h) {
      const { default: vNodes } = this.$slots
      return vNodes.map(vNode => {
        const { componentOptions: options = {} } = vNode
        const { propsData = {} } = options

        if (propsData.label) {
          return [h('p', { class: 'menu-label' }, [propsData.label]), vNode]
        } else {
          return vNode
        }
      })
    },
    // Call on MenuItem
    handleToggerSubmenu(action, index) {
      this.$emit(action, index)
    },
    // Call on MenuItem
    handleItemClick(index) {
      this.$emit('selected', index)
    }
  }
}

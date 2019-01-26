export default {
  name: 'vb-dropdown-menu',
  render(h) {
    const { default: vNodes = [] } = this.$slots
    const content = this.renderContent(h, vNodes)
    return h('div', { class: 'dropdown-menu' }, [
      h('div', { class: 'dropdown-content dropdown-menu' }, content)
    ])
  },
  methods: {
    renderContent(h, vNodes) {
      return vNodes.map(vNode => {
        const { componentOptions: options = {} } = vNode
        const divided = options.propsData && options.propsData.divided

        return divided !== undefined && divided !== false
          ? [h('hr', { class: 'dropdown-divider' }), vNode]
          : vNode
      })
    }
  }
}

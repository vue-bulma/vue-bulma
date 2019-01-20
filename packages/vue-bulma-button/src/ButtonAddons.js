export default {
  name: 'vb-button-addons',
  render(h) {
    const { default: nodes = [] } = this.$slots
    return h(
      'div',
      { class: 'field has-addons' },
      nodes.map(item => h('p', { class: 'control' }, [item]))
    )
  }
}

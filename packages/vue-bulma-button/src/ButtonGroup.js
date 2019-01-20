export default {
  name: 'vb-button-group',
  render(h) {
    const { default: nodes = [] } = this.$slots
    return h(
      'div',
      { class: 'field is-grouped' },
      nodes.map(item => h('p', { class: 'control' }, [item]))
    )
  }
}

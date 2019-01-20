import './style.scss'

export default {
  name: 'vb-box',
  render(h) {
    return h(
      'div',
      {
        class: 'box'
      },
      this.$slots.default
    )
  }
}

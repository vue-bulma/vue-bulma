import './style.scss'

export default {
  name: 'vb-footer',
  render(h) {
    const { classes, $slots } = this
    return h('footer', { class: 'footer' }, $slots.default)
  }
}

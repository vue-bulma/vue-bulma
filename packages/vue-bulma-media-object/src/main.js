import './style.scss'

export default {
  name: 'vb-media-object',
  render(h) {
    const { left, default: content, right } = this.$slots

    const sections = [
      left && h('div', { class: 'media-left' }, left),
      content && h('div', { class: 'media-content' }, content),
      right && h('div', { class: 'media-right' }, right)
    ]

    return h('article', { class: 'media' }, sections)
  }
}

export default {
  name: 'vb-tags',
  props: {
    addons: Boolean
  },
  computed: {
    classes() {
      const { addons } = this
      return {
        tags: true,
        'has-addons': addons
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    return h('div', { class: classes }, $slots.default)
  }
}

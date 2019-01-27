import alignProps from 'vue-bulma-common/src/mixins/align.js'

export default {
  name: 'vb-buttons-list',
  mixins: [alignProps],
  props: {
    addons: Boolean
  },
  computed: {
    classes() {
      const { align, addons } = this
      return {
        buttons: true,
        [`is-${align}`]: !!align,
        'has-addons': addons
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    return h('div', { class: classes }, $slots.default)
  }
}

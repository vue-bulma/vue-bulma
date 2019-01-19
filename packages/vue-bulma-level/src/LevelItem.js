import alignProps from 'vue-bulma-common/src/mixins/align.js'

export default {
  name: 'vb-level-item',
  mixins: [alignProps],
  inject: {
    vbLevel: {
      default() {
        return {}
      }
    }
  },
  computed: {
    classes() {
      const align = this.align || this.vbLevel.align
      return {
        'level-item': true,
        [`has-text-${align}`]: !!align
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    return h('div', { class: classes }, $slots.default)
  }
}

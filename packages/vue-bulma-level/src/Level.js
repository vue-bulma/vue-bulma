import alignProps from 'vue-bulma-common/src/mixins/align.js'

export default {
  name: 'vb-level',
  mixins: [alignProps],
  provide() {
    return {
      vbLevel: this
    }
  },
  props: {
    mobile: Boolean
  },
  computed: {
    classes() {
      return {
        level: true,
        'is-mobile': this.mobile
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    const { left, default: center, right } = $slots

    const sectionLeft = left && h('div', { class: 'level-left' }, left)
    const sectionRight = right && h('div', { class: 'level-right' }, right)

    return h('div', { class: classes }, [sectionLeft, center, sectionRight])
  }
}

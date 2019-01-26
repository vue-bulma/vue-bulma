import alignProps from 'vue-bulma-common/src/mixins/align'
import sizeProps from 'vue-bulma-common/src/mixins/size'

const SEPARATOR = ['arrow', 'bullet', 'dot', 'succeeds']

export default {
  name: 'vb-breadcrumb',
  mixins: [sizeProps, alignProps],
  props: {
    separator: {
      type: String,
      validator(value) {
        return SEPARATOR.includes(value)
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    return h('div', { class: classes }, [h('ul', $slots.default)])
  },
  computed: {
    classes() {
      const { align, separator, size } = this
      return {
        breadcrumb: true,
        [`is-${align}`]: !!align,
        [`has-${separator}-separator`]: !!separator,
        [`is-${size}`]: !!size
      }
    }
  }
}

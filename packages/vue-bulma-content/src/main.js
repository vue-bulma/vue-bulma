import './style.scss'
import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-content',
  mixins: [sizeProps],
  computed: {
    classes() {
      const { size } = this
      return {
        content: true,
        [`is-${size}`]: !!size
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    return h('div', { class: classes }, $slots.default)
  }
}

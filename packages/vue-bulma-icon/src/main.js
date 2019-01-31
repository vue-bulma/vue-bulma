import 'font-awesome/css/font-awesome.css'
import './style.scss'
import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-icon',
  mixins: [sizeProps, colorProps],
  props: {
    name: String
  },
  render(h) {
    const { classes, name, handleClick, $slots } = this
    return h(
      'span',
      { class: classes, on: { click: handleClick } },
      $slots.default || [h('i', { class: name }, [])]
    )
  },
  computed: {
    classes() {
      const { size, color } = this
      return {
        icon: true,
        [`is-${size}`]: !!size,
        [`has-text-${color}`]: !!color
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}

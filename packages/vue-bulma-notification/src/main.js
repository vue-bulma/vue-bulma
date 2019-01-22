import './style.scss'
import colorProps from 'vue-bulma-common/src/mixins/color.js'

export default {
  name: 'vb-notification',
  mixins: [colorProps],
  computed: {
    classes() {
      const { color } = this
      return {
        notification: true,
        [`is-${color}`]: !!color
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
    handleMouseenter(event) {
      this.$emit('mouseenter', event)
    },
    handleMouseleave(event) {
      this.$emit('mouseleave', event)
    }
  },
  render(h) {
    const {
      classes,
      handleClick,
      handleMouseenter,
      handleMouseleave,
      $slots
    } = this
    return h(
      'div',
      {
        class: classes,
        on: {
          click: handleClick,
          mouseenter: handleMouseenter,
          mouseleave: handleMouseleave
        }
      },
      $slots.default
    )
  }
}

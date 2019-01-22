import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-progress',
  mixins: [sizeProps, colorProps],
  props: {
    max: {
      type: [Number, String],
      default: 100,
      validator(value) {
        return +value
      }
    }
  },
  computed: {
    classes() {
      const { color, size } = this
      return {
        progress: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size
      }
    }
  },
  render(h) {
    const { classes, max, $slots } = this
    return h(
      'progress',
      {
        class: classes,
        max: max
      },
      $slots.default
    )
  }
}

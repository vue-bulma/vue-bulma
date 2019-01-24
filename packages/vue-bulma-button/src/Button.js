import { button as colorProps } from 'vue-bulma-common/src/mixins/color.js'
import sizeProps from 'vue-bulma-common/src/mixins/size.js'

const STATES = ['loading', 'active', 'focused', 'hovered', 'static']

export default {
  name: 'vb-button',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  mixins: [sizeProps, colorProps],
  props: {
    type: {
      type: String,
      default: 'button'
    },
    fullwidth: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    rounded: Boolean,
    state: {
      type: String,
      validator(value) {
        return STATES.includes(value)
      }
    }
  },
  computed: {
    formSize() {
      return this.size || this.vbFormItem._formSize
    },
    classes() {
      const {
        color,
        formSize,
        outlined,
        inverted,
        state,
        fullwidth,
        rounded
      } = this
      return {
        button: true,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        [`is-${state}`]: !!state,
        'is-fullwidth': fullwidth,
        'is-inverted': inverted,
        'is-rounded': rounded,
        'is-outlined': outlined
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  },
  render(h) {
    const { type, classes, handleClick, $slots } = this
    return h(
      'button',
      { attrs: { type }, class: classes, on: { click: handleClick } },
      $slots.default
    )
  }
}

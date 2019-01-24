import './style.scss'
import VbIcon from 'vue-bulma-icon'
import baseInput from 'vue-bulma-common/src/mixins/baseInput'
import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'

const STATES = ['focused', 'hovered', 'static']

export default {
  name: 'vb-input',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  components: { VbIcon },
  mixins: [baseInput, colorProps, sizeProps],
  props: {
    rounded: Boolean,
    expanded: Boolean,
    static: Boolean,
    prefix: String,
    suffix: String,
    state: {
      type: String,
      validator(value) {
        return STATES.includes(value)
      }
    }
  },
  render(h) {
    const {
      iconLeft,
      iconRight,
      ctrlClass,
      size,
      classes,
      value,
      handleInput: input,
      handleFocus: focus,
      handleChange: change,
      handleBlur: blur,
      handleComposition,
      $slots,
      $attrs
    } = this
    const inputBody = h('input', {
      class: classes,
      attrs: {
        type: 'text',
        value,
        ...$attrs
      },
      on: {
        input,
        change,
        focus,
        blur,
        compositionstart: handleComposition,
        compositionupdate: handleComposition,
        compositionend: handleComposition
      }
    })
    const prefix = this.renderIcon(h, 'left', iconLeft, $slots.prefix, size)
    const suffix = this.renderIcon(h, 'right', iconRight, $slots.suffix, size)

    return h('div', { class: ctrlClass }, [inputBody, prefix, suffix])
  },
  data() {
    return {
      isOnComposition: false
    }
  },
  computed: {
    iconLeft() {
      return this.$slots.prefix || this.prefix
    },
    iconRight() {
      return this.$slots.suffix || this.suffix
    },
    formSize() {
      return this.size || this.vbFormItem._formSize
    },
    classes() {
      const { color, formSize, state, rounded } = this
      return {
        input: true,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        [`is-${state}`]: !!state,
        'is-static': this.static,
        'is-rounded': rounded
      }
    },
    ctrlClass() {
      const { formSize, loading, iconLeft, iconRight, expanded } = this
      return {
        control: true,
        [`is-${formSize}`]: !!formSize,
        'has-icons-left': !!iconLeft,
        'has-icons-right': !!iconRight,
        'is-loading': loading,
        'is-expanded': expanded
      }
    }
  },
  methods: {
    renderIcon(h, position, icon, slot, size) {
      return (
        icon &&
        h(
          'vb-icon',
          { class: `is-${position}`, size },
          slot || [h('i', { class: icon })]
        )
      )
    }
  }
}

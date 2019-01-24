import './style.scss'
import baseInput from 'vue-bulma-common/src/mixins/baseInput'
import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'

const STATES = ['focused', 'hovered']

export default {
  name: 'vb-textarea',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  mixins: [baseInput, colorProps, sizeProps],
  props: {
    state: {
      type: String,
      validator(value) {
        return STATES.includes(value)
      }
    },
    resize: {
      type: Boolean,
      default: true
    }
  },
  render(h) {
    const {
      ctrlClass,
      classes,
      value,
      handleInput: input,
      handleChange: change,
      handleFocus: focus,
      handleBlur: blur,
      handleComposition,
      $attrs
    } = this
    const content = h(
      'textarea',
      {
        class: classes,
        attrs: {
          type: 'text',
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
      },
      [value]
    )
    return h('div', { class: ctrlClass }, [content])
  },
  data() {
    return {
      isOnComposition: false
    }
  },
  computed: {
    formSize() {
      return this.size || this.vbFormItem._formSize
    },
    classes() {
      const { color, formSize, state, resize } = this
      return {
        textarea: true,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        [`is-${state}`]: !!state,
        'has-fixed-size': !resize
      }
    },
    ctrlClass() {
      const { formSize, loading } = this
      return {
        control: true,
        [`is-${formSize}`]: !!formSize,
        'is-loading': loading
      }
    }
  }
}

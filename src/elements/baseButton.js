const baseButton = {
  props: {
    type: {
      type: String,
      validator: value => ['primary', 'info', 'success', 'warning', 'danger', 'white', 'light', 'dark', 'black', 'link'].includes(value)
    },
    size: {
      type: String,
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    outlined: Boolean,
    inverted: Boolean,
    state: {
      type: String,
      validator: value => ['loading', 'active', 'disabled', 'focused', 'hovered'].includes(value)
    }
  },

  computed: {
    classes () {
      const { type, size, outlined, inverted, state } = this
      const obj = {
        button: true,
        [`is-${type}`]: !!type,
        [`is-${size}`]: !!size,
        [`is-${state}`]: !!state,
        'is-inverted': inverted,
        'is-outlined': outlined
      }
      return obj
    }
  }
}

export default baseButton

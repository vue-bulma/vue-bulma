const baseButton = {
  props: {
    type: {
      type: String,
      validator: value => ['primary', 'info', 'success', 'warning', 'danger', 'link'].includes(value)
    },
    size: {
      type: String,
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    style: {
      type: String,
      validator: value => ['outlined', 'inverted'].includes(value)
    },
    state: {
      type: String,
      validator: value => ['loading', 'active', 'disabled'].includes(value)
    }
  },

  computed: {
    classes () {
      const { type, size, style, state } = this
      const obj = {
        button: true,
        [`is-${type}`]: !!type,
        [`is-${size}`]: !!size,
        [`is-${style}`]: !!style,
        [`is-${state}`]: !!state
      }
      return obj
    }
  }
}

export default baseButton

const SIZES = [1, 2, 3, 4, 5, 6]

export default {
  name: 'vb-subtitle',
  props: {
    size: {
      type: [String, Number],
      default: '5',
      validator(value) {
        return SIZES.includes(+value)
      }
    }
  },
  render(h) {
    const { size } = this
    return h(
      `h${size}`,
      {
        class: {
          subtitle: true,
          [`is-${size}`]: !!size
        }
      },
      this.$slots.default
    )
  }
}

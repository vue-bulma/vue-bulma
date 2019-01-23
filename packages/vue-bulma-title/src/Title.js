const SIZES = [1, 2, 3, 4, 5, 6]

export default {
  name: 'vb-title',
  props: {
    size: {
      type: [String, Number],
      default: '3',
      validator(value) {
        return SIZES.includes(+value)
      }
    },
    spaced: Boolean
  },
  render(h) {
    const { size, spaced } = this
    return h(
      `h${size}`,
      {
        class: {
          title: true,
          [`is-${size}`]: !!size,
          'is-spaced': spaced
        }
      },
      this.$slots.default
    )
  }
}

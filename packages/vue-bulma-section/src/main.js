import './style.scss'

const SIZES = ['medium', 'large']

export default {
  name: 'vb-section',
  props: {
    size: {
      type: String,
      validator(value) {
        return SIZES.includes(value)
      }
    }
  },
  render(h) {
    const { size, $slots } = this
    const classes = {
      section: true,
      [`is-${size}`]: !!size
    }

    return h('section', { class: classes }, $slots.default)
  }
}

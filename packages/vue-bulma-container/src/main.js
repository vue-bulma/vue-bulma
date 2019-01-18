import './style.scss'

const VIEWS = ['desktop', 'fullhd', 'widescreen', 'fluid']

export default {
  name: 'vb-container',
  props: {
    view: {
      type: String,
      validator(value) {
        return VIEWS.includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { view } = this
      return {
        container: true,
        [`is-${view}`]: !!view
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    return h(
      'div',
      {
        class: classes
      },
      $slots.default
    )
  }
}

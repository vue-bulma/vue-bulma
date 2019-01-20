import './style.scss'
import alignProps from 'vue-bulma-common/src/mixins/align.js'

const SIZES = ['medium', 'large', 'fullheight', 'fullheight-with-navbar']
const COLORS = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
  'black',
  'link'
]

export default {
  name: 'vb-hero',
  mixins: [alignProps],
  props: {
    bold: Boolean,
    color: {
      type: String,
      validator(value) {
        return COLORS.includes(value)
      }
    },
    size: {
      type: String,
      validator(value) {
        return SIZES.includes(value)
      }
    }
  },
  render(h) {
    const { classes, $slots } = this
    const { head, default: body, foot } = $slots
    const sections = [
      head && h('div', { class: 'hero-head' }, head),
      h('div', { class: 'hero-body' }, body),
      foot && h('div', { class: 'hero-foot' }, foot)
    ]
    return h('section', { class: classes }, sections)
  },
  computed: {
    classes() {
      const { color, bold, size, align } = this
      return {
        hero: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        [`has-text-${align}`]: !!align,
        'is-bold': bold
      }
    }
  }
}

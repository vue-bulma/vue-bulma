import './style.scss'
import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-progress',
  mixins: [sizeProps, colorProps],
  props: {
    max: {
      type: [Number, String],
      default: 100,
      validator(value) {
        return +value
      }
    },
    value: {
      type: [Number, String],
      required: true,
      default: 0,
      validator(value) {
        return +value
      }
    },
    showLabel: Boolean
  },
  computed: {
    classes() {
      const { color, size } = this
      return {
        progress: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size
      }
    },
    precentage() {
      return Math.floor((this.value / this.max) * 100)
    }
  },
  render(h) {
    const { showLabel } = this
    const progress = this.renderProgress(h)
    const precent = this.renderPercent(h)
    const content = showLabel ? [progress, precent] : [progress]
    return h('div', { class: 'progress-wrap' }, content)
  },
  methods: {
    renderProgress(h) {
      const { classes, max, value, $slots } = this
      return h(
        'progress',
        { class: classes, attrs: { max, value } },
        $slots.default
      )
    },
    renderPercent(h) {
      const { precentage } = this
      return h('span', [`${precentage}%`])
    }
  }
}

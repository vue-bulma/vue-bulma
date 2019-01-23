import colorProps from 'vue-bulma-common/src/mixins/color'

const TAG_SIZES = ['normal', 'medium', 'large']

export default {
  name: 'vb-tag',
  mixins: [colorProps],
  props: {
    rounded: Boolean,
    del: Boolean,
    static: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      validator(value) {
        return TAG_SIZES.includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { color, size, rounded, del } = this
      return {
        tag: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        'is-rounded': rounded,
        'is-delete': del
      }
    }
  },
  methods: {
    handleMouseenter(event) {
      this.$emit('mouseente', event)
    },
    handleClick(event) {
      this.$emit('click', event)
    }
  },
  render(h) {
    const { classes, handleMouseenter, handleClick, del } = this
    return h(
      this.static && !del ? 'span' : 'a',
      {
        class: classes,
        on: { mouseenter: handleMouseenter, click: handleClick }
      },
      this.$slots.default
    )
  }
}

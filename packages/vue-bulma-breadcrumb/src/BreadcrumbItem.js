export default {
  name: 'vb-breadcrumb-item',
  props: {
    actived: Boolean,
    to: [Object, String],
    replace: Boolean
  },
  computed: {
    classes() {
      return { 'is-active': this.actived }
    }
  },
  render(h) {
    const { classes, handleClick: click, $slots } = this

    return h('li', { class: classes }, [
      h('a', { on: { click } }, $slots.default)
    ])
  },
  methods: {
    handleClick() {
      if (!this.to || !this.$router) return

      if (this.replace) {
        this.$router.replace(this.to)
      } else {
        this.$router.push(this.to)
      }
    }
  }
}

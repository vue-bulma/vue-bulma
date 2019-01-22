export default {
  name: 'vb-navbar-item',
  props: {
    name: String,
    static: Boolean
  },
  computed: {
    navbar() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'vb-navbar') {
        parent = parent.$parent
      }
      return parent
    }
  },
  render(h) {
    const { name, static: isStatic, handleClick: click } = this
    return h(
      isStatic ? 'div' : 'a',
      { class: 'navbar-item', on: { click } },
      this.$slots.default
    )
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
      const { navbar, name } = this
      if (navbar && name) {
        navbar.$emit.apply(navbar, ['select', name])
      }
    }
  }
}

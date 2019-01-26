export default {
  name: 'vb-dropdown-item',
  inject: {
    vbDropdown: {
      default() {
        return {}
      }
    }
  },
  props: {
    name: String,
    static: Boolean,
    disabled: Boolean,
    divided: Boolean
  },
  render(h) {
    const { static: isStatic, handleClick: click } = this
    return h(
      isStatic ? 'div' : 'a',
      { class: 'dropdown-item', on: { click } },
      this.$slots.default
    )
  },
  methods: {
    handleClick(event) {
      event.stopPropagation()
      this.$emit('click', event)

      const { vbDropdown: parent, name, static: isStatic } = this
      if (parent && !isStatic) {
        parent.handleItemClick(name)
      }
    }
  }
}

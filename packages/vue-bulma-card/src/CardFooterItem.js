export default {
  name: 'vb-card-footer-item',
  props: {
    static: Boolean
  },
  render(h) {
    const { static: isStatic, handleClick, $slots } = this
    const element = isStatic ? 'p' : 'a'
    const on = !isStatic && { click: handleClick }

    return h(element, { class: 'card-footer-item', on }, $slots.default)
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}

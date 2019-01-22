export default {
  name: 'vb-menu-list',
  props: {
    label: String
  },
  render(h) {
    const { classes, $slots } = this
    return h('ul', { class: classes }, $slots.default)
  },
  computed: {
    parentName() {
      return this.$parent && this.$parent.$options && this.$parent.$options.name
    },
    classes() {
      return {
        'menu-list': this.parentName === 'vb-menu'
      }
    }
  }
}

export default {
  name: 'vb-tab-item',
  data() {
    return {
      isTabItem: true
    }
  },
  inject: {
    rootTabs: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    icon: String
  },
  render(h) {
    const { $slots } = this
    const footer = $slots.footer && h('div', { class: 'footer' }, $slots.footer)

    if (
      this.rootTabs.label === this.label ||
      this.rootTabs.label.label === this.label
    ) {
      return h('div', [$slots.default, footer])
    }
  }
}

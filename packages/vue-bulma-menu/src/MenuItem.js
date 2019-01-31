import VbIcon from 'vue-bulma-icon'

export default {
  name: 'vb-menu-item',
  inject: {
    rootMenu: {
      default: ''
    }
  },
  components: { VbIcon },
  props: {
    route: {
      type: [Object, String],
      default: ''
    },
    index: {
      type: [String, Number],
      required: true
    },
    icon: String
  },
  data() {
    return {
      showSubmenu: false
    }
  },
  render(h) {
    const { labelClasses, handleClick: click, showSubmenu, icon, $slots } = this
    const labelIcon =
      $slots.icon ||
      (icon &&
        h(
          'vb-icon',
          { class: 'vb-menu-item__icon', props: { name: icon } },
          []
        ))

    const label = h('a', { class: labelClasses, on: { click } }, [
      labelIcon,
      $slots.default
    ])
    const submenu = showSubmenu && $slots.submenu

    return h('li', { class: { 'submenu-opened': showSubmenu } }, [
      label,
      submenu
    ])
  },
  computed: {
    labelClasses() {
      const { rootMenu, index, $slots } = this
      return {
        'vb-menu-item__label': true,
        'is-active': rootMenu.actived === index,
        'has-submenu': !!$slots.submenu
      }
    },
    defaultOpen() {
      const { defaultOpen = [] } = this.rootMenu
      return defaultOpen
    }
  },
  created() {
    const { defaultOpen = [] } = this.rootMenu
    this.showSubmenu = defaultOpen.includes(this.index)
  },
  methods: {
    handleClick() {
      if (this.$slots.submenu) {
        this.toggleSubmenu()
      } else {
        if (this.$router && this.route) {
          this.$router.push(this.route)
        }

        this.rootMenu.handleItemClick(this.index)
      }
    },
    toggleSubmenu(defaultOpen) {
      this.showSubmenu =
        defaultOpen === undefined
          ? !this.showSubmenu
          : defaultOpen.includes(this.index)
      const action = this.showSubmenu ? 'open' : 'close'
      this.rootMenu.handleToggerSubmenu(action, this.index)
    }
  },
  watch: {
    defaultOpen(data) {
      this.toggleSubmenu(data)
    }
  }
}

import colorProps from 'vue-bulma-common/src/mixins/color'

const POSITIONS = ['top', 'bottom']

export default {
  name: 'vb-navbar',
  mixins: [colorProps],
  props: {
    transparent: Boolean,
    shadow: Boolean,
    spaced: Boolean,
    position: {
      type: String,
      validator(value) {
        return POSITIONS.includes(value)
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  render(h) {
    const { classes, burgerClass, menuClass, handleToggle, $slots } = this
    const mobileMenuItem = h('span', { 'aria-hidden': 'true' })
    const mobileMenu = h(
      'a',
      {
        role: 'button',
        'aria-label': 'menu',
        'aria-expanded': false,
        classes: burgerClass,
        on: {
          click: handleToggle
        }
      },
      [mobileMenuItem, mobileMenuItem, mobileMenuItem]
    )
    const brand = h('div', { class: 'navbar-brand' }, [
      $slots.brand,
      mobileMenu
    ])
    const content = h('div', { class: menuClass }, [
      h('div', { class: 'navbar-start' }, $slots.default),
      h('div', { class: 'navbar-end' }, $slots.right)
    ])

    return h(
      'nav',
      {
        role: 'navigation',
        'aria-label': 'main navigation',
        class: classes
      },
      [brand, content]
    )
  },
  computed: {
    burgerClass() {
      return {
        burger: true,
        'navbar-burger': true,
        'is-active': this.visible
      }
    },
    menuClass() {
      return {
        'navbar-menu': true,
        'is-active': this.visible
      }
    },
    classes() {
      const { color, position, transparent, shadow, spaced } = this
      return {
        navbar: true,
        [`is-${color}`]: !!color,
        [`is-fixed-${position}`]: !!position,
        'is-transparent': transparent,
        'has-shadow': shadow,
        'is-spaced': spaced
      }
    }
  },
  mounted() {
    this.toggleBodyClass(this.position)
  },
  beforeDestroy() {
    this.toggleBodyClass(this.position)
  },
  watch: {
    position(newVal, oldVal) {
      // Remove old position class
      this.toggleBodyClass(oldVal)

      // Add new position class
      this.toggleBodyClass(newVal)
    }
  },
  methods: {
    toggleBodyClass(position) {
      if (!position) return
      document.body.classList.toggle(`has-navbar-fixed-${position}`)
    },
    handleToggle() {
      this.visible = !this.visible
    }
  }
}

export default {
  name: 'vb-navbar-dropdown',
  props: {
    title: String,
    dropup: Boolean,
    arrowLess: Boolean
  },
  data() {
    return {
      alignRight: false
    }
  },
  render(h) {
    const {
      title,
      classes,
      dropup,
      arrowLess,
      handleTitleOver,
      handleTitleOut,
      $slots
    } = this

    const label = this._renderLabel(h)
    const content = this._renderContent(h)

    return h(
      'div',
      {
        class: {
          'navbar-item': true,
          'has-dropdown': true,
          'is-hoverable': true,
          'has-dropdown-up': dropup
        },
        on: {
          mouseenter: handleTitleOver,
          mouseleave: handleTitleOut
        }
      },
      [label, content]
    )
  },
  computed: {
    classes() {
      // https://bulma.io/documentation/components/navbar/#dropdown-menu
      // Styles for the dropdown menu
      //   When having a transparent navbar, it is preferable to use the boxed version of the dropdown, by using the is-boxed modifier.
      const { parent, alignRight } = this
      return {
        'navbar-dropdown': true,
        'is-right': alignRight,
        'is-boxed': parent && parent.transparent
      }
    },
    parent() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'vb-navbar') {
        parent = parent.$parent
      }
      return parent
    }
  },
  mounted() {
    if (this.$el && this.$el.parentNode) {
      const { className = '' } = this.$el.parentNode || {}
      this.alignRight = className.includes('navbar-end')
    }
  },
  methods: {
    _renderLabel(h) {
      const { title, arrowLess, $slots } = this

      return h(
        'a',
        {
          class: {
            'navbar-link': true,
            'is-arrowless': arrowLess
          }
        },
        $slots.title || [title]
      )
    },
    _renderContent(h) {
      const { classes, $slots } = this
      const { default: nodes = [] } = $slots
      return h(
        'div',
        { class: classes },
        nodes.map(node => {
          const { attrs = {} } = node.data || {}
          return attrs.divided || attrs.divided === ''
            ? [h('hr', { class: 'navbar-divider' }, []), node]
            : node
        })
      )
    },
    handleTitleOver(event) {
      this.$emit('open', event)
    },
    handleTitleOut(event) {
      this.$emit('close', event)
    }
  }
}

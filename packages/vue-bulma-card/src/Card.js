import VbIcon from 'vue-bulma-icon'
import VbImage from 'vue-bulma-image'

export default {
  name: 'vb-card',
  components: { VbIcon, VbImage },
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    image: {
      type: String
    },
    titleCentered: Boolean
  },
  render(h) {
    const header = this.renderHeader(h)
    const image = this.renderImg(h)
    const content = this.renderContent(h)
    const footer = this.renderFooter(h)

    return h('div', { class: 'card' }, [header, image, content, footer])
  },
  methods: {
    renderHeader(h) {
      let header
      const { $slots, titleCentered, title, icon } = this
      const headerTitle = $slots.title || title
      const hasIcon = $slots.icon || icon

      if (!$slots.header && !headerTitle && !hasIcon) return

      if ($slots.header) {
        header = $slots.header
      } else {
        header = []

        if (headerTitle) {
          header.push(
            h(
              'div',
              {
                class: {
                  'card-header-title': true,
                  'is-centered': titleCentered
                }
              },
              headerTitle
            )
          )
        }

        if (hasIcon) {
          const headerTitle = $slots.icon || h('vb-icon', { name: icon }, [])
          header.push(h('div', { class: 'card-header-icon' }, headerTitle))
        }
      }

      return h('header', { class: 'card-header' }, header)
    },
    renderImg(h) {
      const { $slots, image } = this

      if (!$slots.image && !image) {
        return
      }

      const img = $slots.image || [h('vb-image', { attrs: { src: image } }, [])]
      return h('div', { class: 'card-image' }, img)
    },
    renderContent(h) {
      const { $slots } = this
      return (
        $slots.default && h('div', { class: 'card-content' }, $slots.default)
      )
    },
    renderFooter(h) {
      const { $slots } = this
      return $slots.footer && h('div', { class: 'card-footer' }, $slots.footer)
    }
  }
}

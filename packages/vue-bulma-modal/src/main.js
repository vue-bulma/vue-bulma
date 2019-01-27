import './style.scss'
import VbDelete from 'vue-bulma-delete'

const TYPES = ['content', 'card']

export default {
  name: 'vb-modal',
  components: { VbDelete },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'content',
      validator(value) {
        return TYPES.includes(value)
      }
    },
    title: {
      type: String
    },
    mask: {
      tyep: Boolean,
      default: true
    },
    maskClosable: {
      tyep: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return {
        modal: true,
        'is-active': this.visible
      }
    }
  },
  render(h) {
    const {
      classes,
      mask,
      handleClickMask: click,
      type,
      closable,
      close,
      $slots
    } = this

    const bg = mask && h('div', { class: 'modal-background', on: { click } })
    const content =
      type === 'content'
        ? h('div', { class: 'modal-content' }, $slots.default)
        : this.renderCard(h)
    const closeButton =
      type === 'content' &&
      closable &&
      h('button', { class: 'modal-close', on: { click: close } })
    return h('div', { class: classes }, [bg, content, closeButton])
  },
  methods: {
    renderCard(h) {
      const { type, title, closable, close, $slots } = this
      const hasHeader = $slots.title || title || closable
      const header =
        hasHeader &&
        h('header', { class: 'modal-card-head' }, [
          $slots.title || h('p', { class: 'modal-card-title' }, [title]),
          closable && h('vb-delete', { on: { click: close } })
        ])
      const body =
        $slots.default &&
        h('section', { class: 'modal-card-body' }, $slots.default)
      const footer =
        $slots.footer &&
        h('footer', { class: 'modal-card-foot' }, $slots.footer)
      return h('div', { class: 'modal-card' }, [header, body, footer])
    },
    handleClickMask() {
      if (this.maskClosable) {
        this.close()
      }
    },
    close() {
      this.$emit('update:visible', false)
    }
  }
}

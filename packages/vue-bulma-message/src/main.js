import './style.scss'
import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-message',
  mixins: [colorProps, sizeProps],
  props: {
    title: String,
    showClose: Boolean
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {
    classes() {
      const { color, size } = this
      const obj = {
        message: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size
      }
      return obj
    }
  },
  render(h) {
    const { visible, classes, title, showClose, close, $slots } = this
    const header =
      title &&
      h('div', { class: 'message-header' }, [
        h('p', [title]),
        showClose && h('button', { class: 'delete', on: { close } })
      ])
    const body =
      $slots.default && h('div', { class: 'message-body' }, $slots.default)

    return visible && h('article', { class: classes }, [header, body])
  },
  methods: {
    close() {
      this.visible = false
    }
  }
}

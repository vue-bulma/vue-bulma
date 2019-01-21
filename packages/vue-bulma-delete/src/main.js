import './style.scss'
import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-delete',
  mixins: [sizeProps],
  computed: {
    classes() {
      const { size } = this
      return {
        delete: true,
        [`is-${size}`]: !!size
      }
    }
  },
  render(h) {
    const { classes, handleClick } = this
    return h('a', { class: classes, on: { click: handleClick } }, [])
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}

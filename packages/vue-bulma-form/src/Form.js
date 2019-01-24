import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-form',
  provide() {
    return {
      vbForm: this
    }
  },
  mixins: [sizeProps],
  props: {
    horizontal: Boolean
  },
  render(h) {
    return h('form', this.$slots.default)
  }
}

import './style.scss'
import VbIcon from 'vue-bulma-icon'
import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'
import alignProps from 'vue-bulma-common/src/mixins/align'

export default {
  name: 'vb-uploader',
  mixins: [colorProps, sizeProps, alignProps],
  components: { VbIcon },
  props: {
    label: String,
    name: String,
    icon: String,
    fullwidth: Boolean,
    boxed: Boolean
  },
  render(h) {
    const { classes, handleChange, icon, label, hasName, name, $slots } = this
    const input = h('input', {
      class: 'file-input',
      attrs: { type: 'file', name: 'resume' },
      on: { change: handleChange }
    })
    const control = h('span', { class: 'file-cta' }, [
      h(
        'span',
        { class: 'file-icon' },
        $slots.icon || [h('vb-icon', { attrs: { name: icon } })]
      ),
      h('span', { class: 'file-label' }, $slots.label || [label])
    ])
    const filename =
      hasName &&
      h('span', { class: 'file-name' }, $slots['file-name'] || [name])

    return h('div', { class: classes }, [
      h('label', { class: 'file-label' }, [input, control, filename])
    ])
  },
  computed: {
    hasName() {
      return !!this.$slots['file-name'] || !!this.name
    },
    classes() {
      const { color, boxed, size, fullwidth, align } = this
      return {
        file: true,
        'has-name': this.hasName,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        [`is-${align}`]: !!align,
        'is-boxed': boxed,
        'is-fullwidth': fullwidth
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event)
    }
  }
}

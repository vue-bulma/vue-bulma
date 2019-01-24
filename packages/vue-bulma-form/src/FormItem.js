import sizeProps from 'vue-bulma-common/src/mixins/size'
import alignProps from 'vue-bulma-common/src/mixins/align'
import colorProps from 'vue-bulma-common/src/mixins/color'

export default {
  name: 'vb-form-item',
  mixins: [sizeProps, alignProps, colorProps],
  inject: {
    vbForm: {
      default() {
        return {}
      }
    }
  },
  provide() {
    return {
      vbFormItem: this
    }
  },
  props: {
    label: String,
    message: String,
    grouped: Boolean,
    addons: Boolean,
    multiline: Boolean,
    horizontal: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    _formSize() {
      return this.size || this.vbForm.size
    },
    helpMessage() {
      return this.$slots.message || this.message
    },
    isParentForm() {
      return this.$parent.$options.name === 'vb-form'
    },
    isHorizontal() {
      if (this.horizontal === undefined) {
        return this.vbForm.horizontal
      }
      return this.horizontal
    }
  },
  render(h) {
    const { isParentForm, isHorizontal, helpMessage, color } = this
    const label = this.renderLabel(h)
    const help = this.renderHelp(h, helpMessage, color)
    const content = this.renderContent(h, help)

    return h(
      'div',
      { class: { field: true, 'is-horizontal': isParentForm && isHorizontal } },
      [label, content]
    )
  },
  methods: {
    renderLabel(h) {
      const { isParentForm, isHorizontal, label, _formSize = 'normal' } = this

      if (!isParentForm) return

      const tmpl = h('label', { class: 'label' }, label)
      return isHorizontal
        ? h('div', { class: `field-label is-${_formSize}` }, [tmpl])
        : tmpl
    },
    renderContent(h, help) {
      const { isParentForm, grouped, addons, align, multiline } = this
      const { default: vNodes = [] } = this.$slots

      let content = vNodes.map(vNode => this.convertToControl(h, vNode))

      if (addons || grouped) {
        const classes = {
          field: true,
          'is-grouped': grouped,
          [`is-grouped-${align}`]: grouped && !!align,
          'is-grouped-multiline': grouped && multiline,
          'has-addons': addons,
          [`has-addons-${align}`]: addons && !!align
        }

        content = h('div', { class: classes }, [content])
        if (help) {
          content = h('div', { class: 'field' }, [content, help])
        }
      } else {
        content = isParentForm
          ? this.convertToField(h, content, help)
          : [content, help]
      }

      return isParentForm
        ? h('div', { class: 'field-body' }, [content])
        : content
    },
    renderHelp(h, helpMessage, color) {
      if (!helpMessage) return
      const classes = { help: true, [`is-${color}`]: helpMessage && color }
      return h('p', { class: classes }, helpMessage)
    },
    convertToControl(h, vNode) {
      const { componentOptions: options, data } = vNode
      const isControl = options
        ? options.tag !== 'vb-button' // VbButton is <a>
        : data && data.staticClass.includes('control') // custom elm.class has control

      return isControl ? vNode : h('div', { class: 'control' }, [vNode])
    },
    convertToField(h, vNodes, help) {
      return vNodes.map((vNode, index) => {
        const { componentOptions: options } = vNode
        const content = index === 0 ? [vNode, help] : [vNode]
        const isFormItem = options && options.tag === 'vb-form-item'
        return isFormItem ? content : h('div', { class: 'field' }, content)
      })
    }
  }
}

<template>
  <div :class="ctrlClass">
    <div :class="classes">
      <select
        v-model="currentValue"
        v-bind="$attrs"
        :multiple="multiple"
        :size="lines"
        :class="selectClass"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
        <slot></slot>
      </select>

      <vb-icon
        v-if="hasIcon"
        class="is-left"
        :name="icon"
        :size="size"
        :color="color"
      >
        <slot name="icon"></slot>
      </vb-icon>
    </div>
  </div>
</template>

<script>
import VbIcon from 'vue-bulma-icon'
import colorProps from 'vue-bulma-common/src/mixins/color'
import sizeProps from 'vue-bulma-common/src/mixins/size'
import { equal } from 'vue-bulma-common/src/utils'

const STATES = ['focused', 'hovered', 'loading']

export default {
  name: 'vb-select',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  mixins: [colorProps, sizeProps],
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { VbIcon },
  props: {
    multiple: Boolean,
    rounded: Boolean,
    loading: Boolean,
    fullWidth: Boolean,
    icon: String,
    placeholder: String,
    value: {
      required: true
    },
    lines: {
      type: [String, Number],
      validator(value) {
        return +value
      }
    },
    state: {
      type: String,
      validator(value) {
        return STATES.includes(value)
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  computed: {
    formSize() {
      return this.size || this.vbFormItem._formSize
    },
    hasIcon() {
      return !!this.icon || !!this.$slots.icon
    },
    classes() {
      const { color, rounded, multiple, loading, fullWidth, formSize } = this
      return {
        select: true,
        'is-multiple': multiple,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        'is-rounded': rounded,
        'is-loading': loading,
        'is-fullwidth': fullWidth
      }
    },
    ctrlClass() {
      const { hasIcon, fullWidth } = this
      return {
        control: true,
        'has-icons-left': hasIcon,
        'is-expanded': fullWidth
      }
    },
    selectClass() {
      const { state } = this
      return {
        [`is-${state}`]: !!state
      }
    }
  },
  watch: {
    value(data) {
      if (!equal(this.currentValue, data)) {
        this.currentValue = data
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.currentValue)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    }
  }
}
</script>

export default {
  props: {
    value: [String, Number],
    loading: Boolean
  },
  methods: {
    handleComposition(event) {
      const isCompositionEnd = event.type === 'compositionend'
      this.isOnComposition = !isCompositionEnd
      if (isCompositionEnd) {
        this.handleInput(event)
      }
    },
    handleChange(event) {
      this.$emit('input', event.target.value)
    },
    handleInput(event) {
      if (this.isOnComposition) return
      this.$emit('input', event.target.value)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    }
  }
}

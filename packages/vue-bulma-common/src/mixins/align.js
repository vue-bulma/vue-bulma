const ALIGNS = ['centered', 'right']

export default {
  props: {
    align: {
      type: String,
      validator(value) {
        return ALIGNS.includes(value)
      }
    }
  }
}

const BASE_COLORS = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'white',
  'light',
  'dark',
  'black',
  'link'
]

const HERO_COLORS = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
  'black',
  'link'
]

export const button = {
  props: {
    color: {
      type: String,
      validator(value) {
        return [...BASE_COLORS, 'text'].includes(value)
      }
    }
  }
}

export const hero = {
  props: {
    color: {
      type: String,
      validator(value) {
        return HERO_COLORS.includes(value)
      }
    }
  }
}

export default {
  props: {
    color: {
      type: String,
      validator(value) {
        return BASE_COLORS.includes(value)
      }
    }
  }
}

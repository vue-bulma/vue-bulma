const BASE_SIZES = ['small', 'medium', 'large']
const TAG_SIZES = ['normal', 'medium', 'large']
const HERO_SIZES = ['medium', 'large', 'fullheight', 'fullheight-with-navbar']

export const hero = {
  props: {
    size: {
      type: String,
      validator(value) {
        return HERO_SIZES.includes(value)
      }
    }
  }
}

export const tag = {
  props: {
    size: {
      type: String,
      validator(value) {
        return TAG_SIZES.includes(value)
      }
    }
  }
}

export default {
  props: {
    size: {
      type: String,
      validator(value) {
        return BASE_SIZES.includes(value)
      }
    }
  }
}

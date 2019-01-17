const NUMERICAL = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  'full',
  'four-fifths',
  'three-quarters',
  'two-thirds',
  'three-fifths',
  'half',
  'two-fifths',
  'one-third',
  'one-quarter',
  'one-fifth'
]

export default {
  name: 'vb-column',

  props: {
    size: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    offset: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    mobile: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    tablet: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    desktop: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    widescreen: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    fullhd: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    narrow: Boolean
  },

  computed: {
    classes() {
      const {
        size,
        offset,
        mobile,
        tablet,
        desktop,
        widescreen,
        fullhd,
        narrow
      } = this
      return {
        column: true,
        [`is-${size}`]: !!size,
        [`is-offset-${offset}`]: !!offset,
        [`is-${mobile}-mobile`]: !!mobile,
        [`is-${tablet}-tablet`]: !!tablet,
        [`is-${desktop}-desktop`]: !!desktop,
        [`is-${widescreen}-widescreen`]: !!widescreen,
        [`is-${fullhd}-fullhd`]: !!fullhd,
        'is-narrow': narrow
      }
    }
  },

  render(h) {
    const { classes, $slots } = this
    return h(
      'div',
      {
        class: classes
      },
      $slots.default
    )
  }
}

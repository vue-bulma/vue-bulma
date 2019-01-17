const GAPS = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

export default {
  name: 'vb-columns',
  props: {
    view: {
      type: String,
      validator(value) {
        return ['mobile', 'desktop'].includes(value)
      }
    },
    gapType: {
      type: String,
      validator(value) {
        return ['gapless', 'variable'].includes(value)
      }
    },
    gap: {
      type: String,
      validator(value) {
        return GAPS.includes(value)
      }
    },
    mobileGap: {
      type: String,
      validator(value) {
        return GAPS.includes(value)
      }
    },
    tabletGap: {
      type: String,
      validator(value) {
        return GAPS.includes(value)
      }
    },
    desktopGap: {
      type: String,
      validator(value) {
        return GAPS.includes(value)
      }
    },
    widescreenGap: {
      type: String,
      validator(value) {
        return GAPS.includes(value)
      }
    },
    fullhdGap: {
      type: String,
      validator(value) {
        return GAPS.includes(value)
      }
    },
    align: {
      type: String,
      validator(value) {
        return ['vcentered', 'centered'].includes(value)
      }
    },
    multiline: Boolean
  },
  computed: {
    classes() {
      const {
        view,
        gapType,
        gap,
        mobileGap,
        tabletGap,
        desktopGap,
        widescreenGap,
        fullhdGap,
        align,
        multiline
      } = this
      return {
        columns: true,
        [`is-${view}`]: !!view,
        [`is-${gap}`]: !!gap,
        [`is-${gapType}`]: !!gapType,
        [`is-${mobileGap}-mobile`]: !!mobileGap,
        [`is-${tabletGap}-tablet`]: !!tabletGap,
        [`is-${desktopGap}-desktop`]: !!desktopGap,
        [`is-${widescreenGap}-widescreen`]: !!widescreenGap,
        [`is-${fullhdGap}-fullhd`]: !!fullhdGap,
        [`is-${align}`]: !!align,
        'is-multiline': multiline
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

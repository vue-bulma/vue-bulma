import alignProps from 'vue-bulma-common/src/mixins/align'
import sizeProps from 'vue-bulma-common/src/mixins/size'

const STYLES = ['boxed', 'toggle', 'fullwidth']
const POSITION = ['left', 'right']

export default {
  name: 'vb-tabs',
  mixins: [alignProps, sizeProps],
  provide() {
    return {
      rootTabs: this
    }
  },
  props: {
    tabs: {
      type: Array
    },
    type: {
      type: String,
      validator(value) {
        return STYLES.includes(value)
      }
    },
    rounded: Boolean,
    fullwidth: Boolean,
    end: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validator(value) {
        return POSITION.includes(value)
      }
    },
    card: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 当前Tab
      currentTab: 0,
      originalBorder: '',
      tabList: [],
      label: ''
    }
  },
  render(h) {
    const { classes } = this
    const tab = this.renderTab(h)
    const content = this.renderContent(h)
    const composing = this.end ? [content, tab] : [tab, content]
    return h('div', { class: classes }, composing)
  },
  computed: {
    classes() {
      const { align, size, type, rounded, fullwidth, card } = this
      return {
        tabs: true,
        [`is-${align}`]: !!align,
        [`is-${size}`]: !!size,
        [`is-${type}`]: !!type,
        'is-toggle-rounded': rounded,
        'is-fullwidth': fullwidth,
        'is-card': !!card
      }
    },
    ulClass() {
      const { end, type, position, card } = this
      return {
        'is-end': (!type && end) || (type === 'boxed' && end),
        [`${position}`]: !!position,
        margin: !card
      }
    },
    aNomalClass() {
      const { end, type, position } = this

      return {
        end: !type && end,
        position: !!position
      }
    },
    aActiveClass() {
      const { end, type, position } = this

      return {
        active: !type && end,
        'boxed-active': type === 'boxed' && end,
        position: !!position
      }
    }
  },
  methods: {
    handleClick(index, label) {
      this.currentTab = index
      this.label = label
      this.$emit('click', index)
    },
    renderContent(h) {
      const { $slots } = this
      return h('div', { class: 'content' }, $slots.default)
    },
    renderTab(h) {
      const { ulClass } = this
      return h(
        'ul',
        { class: ulClass },
        this.tabList.map((tab, index) => this.renderItem(h, tab, index))
      )
    },
    renderItem(h, tab, index) {
      const { currentTab, handleClick, aActiveClass, aNomalClass } = this
      const aclass = currentTab === index ? aActiveClass : aNomalClass
      const visible = tab.icon && tab.icon !== ''
      const tabIcon = this.renderTabIcon(h, tab)
      const label = this.renderLabel(h, tab)
      const itemContent = visible ? [tabIcon, label] : [label]

      return h(
        'li',
        {
          class: { 'is-active': currentTab === index },
          on: {
            click: () => handleClick(index, tab)
          }
        },
        [h('a', { class: aclass }, itemContent)]
      )
    },
    renderTabIcon(h, tab) {
      const icon = tab.icon
      return h('span', { class: 'icon is-small' }, [h('i', { class: icon })])
    },
    renderLabel(h, tab) {
      return h('span', [tab.label])
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.tabList = this.$children.filter(child => child.isTabItem)
      this.label = this.tabList[0].label
    })
  }
}

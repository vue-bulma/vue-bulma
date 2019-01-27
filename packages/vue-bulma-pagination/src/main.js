import './style.scss'
import alignProps from 'vue-bulma-common/src/mixins/align'
import sizeProps from 'vue-bulma-common/src/mixins/size'

export default {
  name: 'vb-pagination',
  mixins: [alignProps, sizeProps],
  props: {
    current: {
      type: [Number, String],
      default: 1
    },
    pageCount: {
      type: Number,
      default: 1
    },
    // Items count in prevMore and nextMore
    pagerCount: {
      type: Number,
      default: 5
    },
    rounded: Boolean,
    prevText: String,
    nextText: String
  },
  data() {
    return {
      currentPage: this.current
    }
  },
  computed: {
    classes() {
      const { align, rounded, size } = this
      return {
        pagination: true,
        [`is-${align}`]: !!align,
        [`is-${size}`]: !!size,
        'is-rounded': rounded
      }
    },
    hasPrevPage() {
      return this.currentPage > 1
    },
    hasNextPage() {
      const { currentPage, pageCount } = this
      return currentPage < pageCount && currentPage > 0
    },
    pagination() {
      const { currentPage, pageCount, pagerCount } = this
      const showMore = pageCount > pagerCount

      const min = 2
      const max = pageCount - 1
      const offset = (pagerCount - 3) / 2
      const start = currentPage - offset
      const end = currentPage + offset

      const showPrevMore = showMore && start > min
      const showNextMore = showMore && end < max

      let pages = []
      const startPage = showPrevMore ? start : min
      const endPage = showNextMore ? end : max

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      return {
        pages,
        showPrevMore,
        showNextMore
      }
    }
  },
  render(h) {
    const { classes, pageCount, pagination } = this
    const prevButton = this.renderButton(h, 'prev')
    const nextButton = this.renderButton(h, 'next')
    const firstItem = this.renderItem(h, 1)
    const prevMore = pagination.showPrevMore && this.renderEllipsis(h)
    const nextMore = pagination.showNextMore && this.renderEllipsis(h)
    const lastItem = pageCount > 1 && this.renderItem(h, pageCount)
    const pageItems = pagination.pages.map(page => this.renderItem(h, page))

    return h(
      'nav',
      {
        attrs: { role: 'navigation', 'aria-label': 'pagination' },
        class: classes
      },
      [
        prevButton,
        nextButton,
        h('ul', { class: 'pagination-list' }, [
          firstItem,
          prevMore,
          pageItems,
          nextMore,
          lastItem
        ])
      ]
    )
  },
  methods: {
    renderItem(h, page) {
      const { currentPage, goPage } = this
      return h('li', [
        h(
          'a',
          {
            class: {
              'pagination-link': true,
              'is-current': page === currentPage
            },
            attrs: { 'aria-label': `Goto page ${page}` },
            on: {
              click: () => goPage(page)
            }
          },
          [page]
        )
      ])
    },
    renderButton(h, type) {
      const tmpl =
        type === 'prev'
          ? {
              class: 'previous',
              disabled: this.hasPrevPage,
              click: this.prePage,
              content: this.$slots.prev || this.prevText || 'Previous'
            }
          : {
              class: 'next',
              disabled: this.hasNextPage,
              click: this.nextPage,
              content: this.$slots.next || this.nextText || 'Next page'
            }

      return h(
        'a',
        {
          class: `pagination-${tmpl.class}`,
          disabled: tmpl.disabled,
          on: { click: tmpl.click }
        },
        [tmpl.content]
      )
    },
    renderEllipsis(h) {
      return h('li', [h('span', { class: 'pagination-ellipsis' }, ['…'])])
    },
    goPage(index) {
      if (index !== this.currentPage) {
        this.setCurrent(index)
      }
    },
    prePage() {
      if (this.hasPrevPage) {
        this.setCurrent(this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.hasNextPage) {
        this.setCurrent(this.currentPage + 1)
      }
    },
    setCurrent(page) {
      this.currentPage = page
      this.$emit('change', page)
      this.$emit('update:current', page)
    }
  },
  watch: {
    current(newVal) {
      this.currentPage = newVal
    }
  }
}

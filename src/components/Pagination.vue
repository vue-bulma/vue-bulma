<template>
  <nav class="pagination" :class="classes">
    <a class="pagination-previous" rel="prev">Previous</a>
    <a class="pagination-next" rel="next">Next page</a>
    <ul class="pagination-list">
      <li v-for="p in pages">
        <span class="pagination-ellipsis" v-if="p === 0">&hellip;</span>
        <a class="pagination-link" :class="p === current ? 'is-current' : ''" v-else>{{ p }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      validator: value => ['centered', 'right'].includes(value)
    },
    page: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 30
    },
    totalCount: {
      type: Number,
      default: 0
    },
    ellipsis: {
      type: Number,
      default: 2
    },
    gap: {
      type: Number,
      default: 2
    },
    numberOfPages: {
      type: Number,
      default () {
        return Math.ceil(this.totalCount / this.perPage)
      }
    }
  },

  data () {
    const { page, numberOfPages } = this
    return {
      current: Math.min(Math.max(page, 1), numberOfPages)
    }
  },

  computed: {
    classes () {
      const { align } = this
      const obj = {
        [`is-${align}`]: !!align
      }
      return obj
    },

    pages () {
      const { current, numberOfPages, ellipsis, gap } = this
      const before = []
      const middle = []
      const after = []

      if (current - gap > 0) {
        for (let n = gap; n > 0; n--) {
          middle.push(current - n)
        }
      }

      middle.push(current)

      if (current + gap < numberOfPages) {
        for (let n = 1; n <= gap; n++) {
          middle.push(current + n)
        }
      }

      const middleFirst = middle[0]
      let f = gap
      if (middleFirst - ellipsis - gap > 0) {
        middle.unshift(0)
        f = gap + 1
      } else {
        f = middleFirst
      }
      for (let n = f - 1; n > 0; n--) {
        before.push(f - n)
      }

      const middleLast = middle[middle.length - 1]
      let a = gap
      if (middleLast + ellipsis <= numberOfPages - gap) {
        middle.push(0)
      } else {
        a = numberOfPages - middleLast
      }
      for (let n = a - 1; n >= 0; n--) {
        after.push(numberOfPages - n)
      }

      const result = [].concat(before, middle, after)

      if (current < gap + 1 && before.length < 2 * gap + 1) {
        const index = result.indexOf(0)
        if (index > 0 && index < 2 * gap + 1) {
          const n = result[index - 1]
          const m = result[index + 1]
          if (n + ellipsis < m) {
            for (let i = 2 * gap + 1 - index; i > 0; i--) {
              result.splice(index, 0, n + i)
            }
          }
        }
      } else if (current + gap >= numberOfPages) {
        const index = result.indexOf(0)
        const n = result[index - 1]
        const m = result[index + 1]
        if (n + ellipsis < m) {
          // for (let i = result.length - 1 - index)
          const l = result.length - 1 - index
          for (let i = 2 * gap + 1 - l; i > 0; i--) {
            result.splice(index + 1, 0, m - i)
          }
        }
      }

      return result
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/pagination';
</style>

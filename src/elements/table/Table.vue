<template>
  <div class="table-container">
    <table class="table" :class="classes">
      <slot name="header"></slot>
      <tbody>
        <slot></slot>
      </tbody>
      <slot name="footer"></slot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    bordered: Boolean,
    striped: Boolean,
    narrow: Boolean
  },

  computed: {
    classes () {
      const { bordered, striped, narrow } = this
      const obj = []
      if (bordered) obj.push('is-bordered')
      if (striped) obj.push('is-striped')
      if (narrow) obj.push('is-narrow')
      return obj
    }
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/table';
</style>

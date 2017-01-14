<template>
  <a :class="classes">
    <slot></slot>
  </a>
</template>

<script>
import baseButton from './baseButton'

export default {
  mixins: [baseButton]
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button';
</style>

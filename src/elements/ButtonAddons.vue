<template>
  <control hasAddons>
    <slot></slot>
  </control>
</template>

<script>
import Control from './Control.vue'

export default {
  components: {
    Control
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button';
@import '~bulma/sass/elements/form';
</style>

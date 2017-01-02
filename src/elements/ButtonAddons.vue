<template>
  <control class="has-addons">
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
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/elements/form.sass';
</style>

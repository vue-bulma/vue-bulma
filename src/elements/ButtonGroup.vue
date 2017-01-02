<template>
  <button-group class="is-grouped">
    <slot></slot>
  </button-group>
</template>

<script>
import Vue from 'vue'
import Control from './Control.vue'

const ButtonGroup = Vue.component('button-group', {
  components: {
    Control
  },

  render (h) {
    return h('control', this.list.map(item => h('control', [item])))
  },

  computed: {
    list () {
      return this.$slots.default || []
    }
  }
})

export default {
  components: {
    ButtonGroup
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button.sass';
</style>

<script>
import Vue from 'vue'
import Control from './Control.vue'

const ButtonGroup = Vue.component('vue-bulma-button-group', {
  components: {
    Control
  },

  render (h) {
    return h('control', { 'class': 'is-grouped' }, this.list.map(item => h('control', [item])))
  },

  computed: {
    list () {
      return this.$slots.default || []
    }
  }
})

export default ButtonGroup
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button.sass';
</style>

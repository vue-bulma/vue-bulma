<template>
  <div class="docs">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Docs',
  data() {
    return {
      main: null
    }
  },
  mounted() {
    const [main] = document.getElementsByClassName('main')
    this.main = main

    this.scrollTop(this.$route)
  },
  methods: {
    scrollTop({ hash }) {
      let offset = 0

      if (hash) {
        const elm = document.getElementById(hash.slice(1))
        offset = elm && elm.offsetTop - 52
      }

      this.main.scrollTop = offset
    }
  },
  watch: {
    $route(data) {
      this.scrollTop(data)
    }
  }
}
</script>

<style scoped>
.docs {
  padding-left: 1rem;
  box-sizing: border-box;
  transition: padding-left 0.5s;
}
</style>

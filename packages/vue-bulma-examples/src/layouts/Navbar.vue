<template>
  <vb-navbar @select="handleSelect" position="top" shadow class="site-navbar">
    <vb-navbar-item slot="brand">
      <a @click="toggleSidebar">
        <vb-icon name="fa fa-bars" size="medium" iconSize="lg"></vb-icon>
      </a>
    </vb-navbar-item>

    <template slot="right">
      <vb-navbar-item name="Docs">Docs</vb-navbar-item>

      <vb-navbar-item name="github">
        <vb-icon name="fa fa-github fa-lg" iconSize="lg"></vb-icon>
      </vb-navbar-item>

      <vb-navbar-dropdown title="Bulma">
        <vb-navbar-item name="Bulma">Documentation</vb-navbar-item>
        <hr class="navbar-divider" />
        <vb-navbar-item static>Version 0.7.2</vb-navbar-item>
      </vb-navbar-dropdown>
    </template>
  </vb-navbar>
</template>

<script>
export default {
  methods: {
    handleSelect(name) {
      if (name === 'github') {
        window.open('https://github.com/vue-bulma/bulma-ui')
      } else if (name === 'Bulma') {
        window.open('https://bulma.io/')
      } else {
        this.$router.push({ name })
      }
    },
    toggleSidebar() {
      this.$emit('toggleSidebar')
    }
  }
}
</script>

<style scoped>
.site-navbar {
  z-index: 32 !important;
}
</style>

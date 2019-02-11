<template>
  <div id="app" :class="classes">
    <navbar @toggleSidebar="toggleSidebar"></navbar>

    <sidebar></sidebar>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      visible: true,
      fullwidth: false
    }
  },
  computed: {
    classes() {
      return {
        'has-sidebar': this.visible,
        'has-fullwidth-content': this.fullwidth
      }
    }
  },
  methods: {
    setVisible(route) {
      const { meta = {} } = route
      const fullwidth = Boolean(meta.fullwidth)
      this.fullwidth = fullwidth
      this.visible = !fullwidth
    },
    toggleSidebar() {
      this.visible = !this.visible
    }
  },
  watch: {
    $route(route) {
      this.setVisible(route)
    }
  }
}
</script>

<style lang="scss">
$sidebar-width: 220px;

#app,
body,
html {
  height: 100%;
  font-size: 16px;
  overflow: hidden !important;
}
.main {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.sidebar {
  width: $sidebar-width;
  left: -$sidebar-width - 5px;
}
.has-sidebar {
  .sidebar {
    left: 0;
  }
  .docs {
    padding-left: $sidebar-width !important;
  }
  &.has-fullwidth-content {
    .docs {
      padding-left: 1rem;
    }
  }
}
</style>

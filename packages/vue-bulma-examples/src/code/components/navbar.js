let code = {}

code.basic = `\
<vb-navbar>
  <vb-navbar-item slot="brand">
    <a>
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
    </a>
  </vb-navbar-item>

  <vb-navbar-item>
    <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
  </vb-navbar-item>

  <vb-navbar-item>Documentation</vb-navbar-item>

  <vb-navbar-dropdown>
    <template slot="title">More</template>

    <vb-navbar-item>About</vb-navbar-item>
    <vb-navbar-item>Jobs</vb-navbar-item>
    <hr class="navbar-divider">
    <vb-navbar-item>Contact</vb-navbar-item>
  </vb-navbar-dropdown>

  <vb-navbar-item slot="right" static>
    <vb-buttons-list>
      <vb-button color="primary">Sign up</vb-button>
      <vb-button color="light">Log in</vb-button>
    </vb-buttons-list>
  </vb-navbar-item>
</vb-navbar>
`

code.transparentNavbar = `\
<vb-navbar transparent>
  <vb-navbar-item slot="brand">
    <a>
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
    </a>
  </vb-navbar-item>

  <vb-navbar-item>
    <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
  </vb-navbar-item>
  <vb-navbar-item>Documentation</vb-navbar-item>

  <vb-navbar-dropdown>
    <template slot="title">More</template>

    <vb-navbar-item>About</vb-navbar-item>
    <vb-navbar-item>Jobs</vb-navbar-item>
    <hr class="navbar-divider">
    <vb-navbar-item>Contact</vb-navbar-item>
  </vb-navbar-dropdown>

  <template slot="right">
    <vb-navbar-item>
      <vb-buttons-list>
        <vb-button color="primary">Sign up</vb-button>
        <vb-button color="light">Log in</vb-button>
      </vb-buttons-list>
    </vb-navbar-item>
  </template>
</vb-navbar>
`

code.fixedNavbar = `\
<template>
  <div>
    <vb-button-addons>
      <vb-button @click="togglePosition('top')">Show Fixed Top</vb-button>
      <vb-button @click="togglePosition('bottom')">Show Fixed Bottom</vb-button>
      <vb-button @click="togglePosition()">Hide</vb-button>
    </vb-button-addons>

    <vb-navbar v-if="position" :position="position">
      <vb-navbar-item slot="brand">
        <a>
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
        </a>
      </vb-navbar-item>

      <vb-navbar-item>
        <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
      </vb-navbar-item>
      <vb-navbar-item>Documentation</vb-navbar-item>

      <vb-navbar-dropdown>
        <template slot="title">More</template>
        <vb-navbar-item>About</vb-navbar-item>
        <vb-navbar-item>Jobs</vb-navbar-item>
      </vb-navbar-dropdown>

      <template slot="right">
        <vb-navbar-item static>
          <vb-buttons-list>
            <vb-button color="primary">Sign up</vb-button>
            <vb-button color="light">Log in</vb-button>
          </vb-buttons-list>
        </vb-navbar-item>
      </template>
    </vb-navbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        position: null
      }
    },
    methods: {
      togglePosition(value) {
        this.position = value
      }
    }
  }
</script>
`

code.rightDropdown = `\
<vb-navbar>
  <vb-navbar-dropdown>
    <template slot="title">Left</template>
    <vb-navbar-item>About</vb-navbar-item>
    <vb-navbar-item>Jobs</vb-navbar-item>
  </vb-navbar-dropdown>

  <vb-navbar-dropdown dropup>
    <template slot="title">Up</template>
    <vb-navbar-item>About</vb-navbar-item>
    <vb-navbar-item>Jobs</vb-navbar-item>
  </vb-navbar-dropdown>

  <vb-navbar-dropdown arrow-less>
    <template slot="title">Dropdown without arrow</template>
    <vb-navbar-item>About</vb-navbar-item>
    <vb-navbar-item>Jobs</vb-navbar-item>
  </vb-navbar-dropdown>

  <template slot="right">
    <vb-navbar-dropdown>
      <template slot="title">Right</template>
      <vb-navbar-item>About</vb-navbar-item>
      <vb-navbar-item>Jobs</vb-navbar-item>
    </vb-navbar-dropdown>
  </template>
</vb-navbar>
`

code.colors = `\
<template>
  <div>
    <vb-buttons-list slot="control">
      <vb-button v-for="color in colors" :key="color" :color="color" @click="handleCheckColor(color)">{{color}}</vb-button>
    </vb-buttons-list>

    <vb-navbar :color="color">
      <vb-navbar-item slot="brand">
        <a>
          <img :src="colorPicture" width="112" height="28" alt="Bulma">
        </a>
      </vb-navbar-item>
      <vb-navbar-item>Home</vb-navbar-item>
      <vb-navbar-dropdown title="More">
        <vb-navbar-item>About</vb-navbar-item>
      </vb-navbar-dropdown>
      <vb-navbar-item slot="right" static>
        <vb-button color="primary">Sign up</vb-button>
      </vb-navbar-item>
    </vb-navbar>
  </div>
</template>

<script>
const COLORS = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'white',
  'light',
  'dark',
  'black',
  'link'
]

export default {
  data() {
    return {
      colors,
      color: 'primary'
    }
  },
  computed: {
    picture() {
      const picName = ['warning', 'light', 'white'].includes(this.color)
        ? 'bulma-logo.png'
        : 'bulma-logo-white.png'
      return \`https://bulma.io/images/\${picName}\`
    }
  },
  methods: {
    handleCheckColor(color) {
      this.color = color
    }
  }
}
</script>
`

export default code

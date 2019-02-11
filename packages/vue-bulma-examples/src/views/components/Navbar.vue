<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <div slot="control">
          <p>Last Click: {{ name }}</p>
          <p>Dropdown Status: {{ status }}</p>
        </div>

        <vb-navbar @select="handleSelect">
          <vb-navbar-item slot="brand" name="brand">
            <a @click="handleCustomEvent('Brand')">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="Bulma"
              />
            </a>
          </vb-navbar-item>

          <vb-navbar-item name="home">
            <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
          </vb-navbar-item>
          <vb-navbar-item name="documentation">Documentation</vb-navbar-item>

          <vb-navbar-dropdown @open="handleOpen" @close="handleClose">
            <template slot="title"
              >More</template
            >

            <vb-navbar-item name="about">About</vb-navbar-item>
            <vb-navbar-item name="jobs">Jobs</vb-navbar-item>
            <vb-navbar-item name="contact" divided>Contact</vb-navbar-item>
          </vb-navbar-dropdown>

          <vb-navbar-item slot="right" static>
            <vb-buttons-list>
              <vb-button color="primary" @click="name = 'Sign up'">
                Sign up
              </vb-button>
              <vb-button color="light" @click="name = 'Log in'">
                Log in
              </vb-button>
            </vb-buttons-list>
          </vb-navbar-item>
        </vb-navbar>
      </demo>
    </example-section-item>

    <example-section-item title="Transparent navbar">
      <demo :code="code.transparentNavbar">
        <vb-navbar @select="handleSelect" transparent>
          <vb-navbar-item slot="brand" name="brand">
            <a @click="handleCustomEvent('Brand')">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="Bulma"
              />
            </a>
          </vb-navbar-item>

          <vb-navbar-item name="home">
            <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
          </vb-navbar-item>
          <vb-navbar-item name="documentation">Documentation</vb-navbar-item>

          <vb-navbar-dropdown>
            <template slot="title"
              >More</template
            >
            <vb-navbar-item name="about">About</vb-navbar-item>
            <vb-navbar-item name="jobs">Jobs</vb-navbar-item>
          </vb-navbar-dropdown>

          <template slot="right">
            <vb-navbar-item>
              <vb-buttons-list>
                <vb-button color="primary" @click="name = 'Sign up'">
                  Sign up
                </vb-button>
                <vb-button color="light" @click="name = 'Log in'">
                  Log in
                </vb-button>
              </vb-buttons-list>
            </vb-navbar-item>
          </template>
        </vb-navbar>
      </demo>
    </example-section-item>

    <example-section-item title="Fixed Navbar">
      <demo :code="code.fixedNavbar">
        <vb-buttons-list slot="control">
          <vb-button @click="togglePosition('top')">Show Fixed Top</vb-button>
          <vb-button @click="togglePosition('bottom')"
            >Show Fixed Bottom</vb-button
          >
          <vb-button @click="togglePosition()">Hide</vb-button>
        </vb-buttons-list>

        <vb-navbar v-if="position" @select="handleSelect" :position="position">
          <vb-navbar-item slot="brand" name="brand">
            <a @click="handleCustomEvent('Brand')">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="Bulma"
              />
            </a>
          </vb-navbar-item>

          <vb-navbar-item name="home">
            <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
          </vb-navbar-item>
          <vb-navbar-item name="documentation">Documentation</vb-navbar-item>

          <vb-navbar-dropdown>
            <template slot="title"
              >More</template
            >
            <vb-navbar-item name="about">About</vb-navbar-item>
            <vb-navbar-item name="jobs">Jobs</vb-navbar-item>
          </vb-navbar-dropdown>

          <template slot="right">
            <vb-navbar-item static>
              <vb-buttons-list>
                <vb-button color="primary" @click="name = 'Sign up'">
                  Sign up
                </vb-button>
                <vb-button color="light" @click="name = 'Log in'">
                  Log in
                </vb-button>
              </vb-buttons-list>
            </vb-navbar-item>
          </template>
        </vb-navbar>
      </demo>
    </example-section-item>

    <example-section-item title="Right Dropdown">
      <demo :code="code.rightDropdown">
        <vb-navbar @select="handleSelect">
          <vb-navbar-dropdown>
            <template slot="title"
              >Left</template
            >
            <vb-navbar-item name="about">About</vb-navbar-item>
            <vb-navbar-item name="jobs">Jobs</vb-navbar-item>
          </vb-navbar-dropdown>

          <vb-navbar-dropdown dropup>
            <template slot="title"
              >Up</template
            >
            <vb-navbar-item name="about">About</vb-navbar-item>
            <vb-navbar-item name="jobs">Jobs</vb-navbar-item>
          </vb-navbar-dropdown>

          <vb-navbar-dropdown arrow-less>
            <template slot="title"
              >Dropdown without arrow</template
            >
            <vb-navbar-item name="about">About</vb-navbar-item>
            <vb-navbar-item name="jobs">Jobs</vb-navbar-item>
          </vb-navbar-dropdown>

          <template slot="right">
            <vb-navbar-dropdown>
              <template slot="title"
                >Right</template
              >
              <vb-navbar-item name="about">About</vb-navbar-item>
              <vb-navbar-item name="jobs">Jobs</vb-navbar-item>
            </vb-navbar-dropdown>
          </template>
        </vb-navbar>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo :code="code.colors">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="color in colors"
            :key="color"
            :color="color"
            @click="handleCheckColor(color)"
            >{{ color }}</vb-button
          >
        </vb-buttons-list>

        <vb-navbar :color="color">
          <vb-navbar-item slot="brand" name="brand">
            <a @click="handleCustomEvent('Brand')">
              <img :src="colorPicture" width="112" height="28" alt="Bulma" />
            </a>
          </vb-navbar-item>
          <vb-navbar-item>Home</vb-navbar-item>
          <vb-navbar-dropdown title="More">
            <vb-navbar-item name="about">About</vb-navbar-item>
          </vb-navbar-dropdown>
          <vb-navbar-item slot="right" static>
            <vb-button color="primary" @click="name = 'Sign up'"
              >Sign up</vb-button
            >
          </vb-navbar-item>
        </vb-navbar>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
const BASE_COLOR = [
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

import code from '@/code/components/navbar.js'

export default {
  name: 'NavbarExamples',
  data() {
    return {
      code,
      name: 'none',
      colors: BASE_COLOR,
      position: null,
      color: 'primary',
      status: 'close'
    }
  },
  computed: {
    colorPicture() {
      const picName = ['warning', 'light', 'white'].includes(this.color)
        ? 'bulma-logo.png'
        : 'bulma-logo-white.png'
      return `https://bulma.io/images/${picName}`
    }
  },
  methods: {
    handleOpen() {
      this.status = 'open'
    },
    handleClose() {
      this.status = 'close'
    },
    handleSelect(name) {
      this.name = name
    },
    handleCustomEvent(name) {
      this.name = name
    },
    togglePosition(value) {
      this.position = value
    },
    handleCheckColor(color) {
      this.color = color
    }
  }
}
</script>

let code = { sizes: {}, fullheightHero: {} }

code.basic = `\
<vb-hero>
  <vb-container>
    <vb-title>Hero title</vb-title>
    <vb-subtitle>Hero subtitle</vb-subtitle>
  </vb-container>
</vb-hero>
`

code.colors = `\
<template>
  <div>
    <vb-buttons-list>
      <vb-button
        v-for="color in colors"
        :key="color"
        :color="color"
        @click="toggleColors(color)"
      >
        {{color}}
      </vb-button>
    </vb-buttons-list>

    <vb-hero color="primary">
      <vb-container>
        <vb-title>{{color}} title</vb-title>
        <vb-subtitle>{{color}} subtitle</vb-subtitle>
      </vb-container>
    </vb-hero>
  </div>
</template>

<script>
const HERO_COLORS = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
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
  methods: {
    toggleColors(color) {
      this.color = color
    }
  }
}
</script>
`

code.gradients = `\
<template>
  <div>
    <vb-buttons-list>
      <vb-button
        v-for="color in colors"
        :key="color"
        :color="color"
        @click="toggleColors(color)"
      >
        {{color}}
      </vb-button>
    </vb-buttons-list>

    <vb-hero :color="color" bold>
      <vb-container>
        <vb-title>{{colorBold}} bold title</vb-title>
        <vb-subtitle>{{colorBold}} bold subtitle</vb-subtitle>
      </vb-container>
    </vb-hero>
  </div>
</template>

<script>
const HERO_COLORS = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
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
  methods: {
    toggleColors(color) {
      this.color = color
    }
  }
}
</script>
`

code.sizes.medium = `\
<vb-hero color="primary" size="medium">
  <vb-container>
    <vb-title>Medium bold title</vb-title>
    <vb-subtitle>Medium bold subtitle</vb-subtitle>
  </vb-container>
</vb-hero>
`

code.sizes.large = `\
<vb-hero color="info" size="large">
  <vb-container>
    <vb-title>Large bold title</vb-title>
    <vb-subtitle>Large bold subtitle</vb-subtitle>
  </vb-container>
</vb-hero>
`

code.sizes.fullheight = `\
<vb-hero color="success" size="fullheight">
  <vb-container>
    <vb-title>Fullheight bold title</vb-title>
    <vb-subtitle>Fullheight bold subtitle</vb-subtitle>
  </vb-container>
</vb-hero>
`

code.fullheightNavbar = `\
<vb-hero color="info" size="fullheight-with-navbar">
  <vb-container>
    <vb-title>Fullheight hero with navbar</vb-title>
    <vb-subtitle>Fullheight hero with navbar</vb-subtitle>
  </vb-container>
</vb-hero>
`

code.fullheightHero.medium = `\
<vb-hero color="primary" size="medium" align="centered">
  <vb-container>
    <vb-title>Title</vb-title>
    <vb-subtitle>Subtitle</vb-subtitle>
  </vb-container>

  <vb-navbar slot="head">
    <vb-navbar-item slot="brand" name="logo">
      <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
    </vb-navbar-item>

    <template slot="right">
      <vb-navbar-item name="Home">Home</vb-navbar-item>
      <vb-navbar-item name="Examples">Examples</vb-navbar-item>
      <vb-navbar-item name="Documentation">Documentation</vb-navbar-item>
      <vb-navbar-item>
        <vb-button color="primary" inverted>
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          <span>Download</span>
        </vb-button>
      </vb-navbar-item>
    </template>
  </vb-navbar>

  <vb-tabs slot="foot" type="boxed" fullwidth :tabs="tabs"></vb-tabs>
</vb-hero>
`

code.fullheightHero.large = `\
<vb-hero color="info" size="large" align="centered">
  ...
</vb-hero>
`

code.fullheightHero.fullheight = `\
<vb-hero color="success" size="fullheight" align="centered">
  ...
</vb-hero>
`

export default code

<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-hero>
          <vb-container>
            <vb-title>Hero title</vb-title>
            <vb-subtitle>Hero subtitle</vb-subtitle>
          </vb-container>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo :code="code.colors">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="color in colors"
            :key="color"
            :color="color"
            @click="toggleColors(color)"
          >
            {{ color }}
          </vb-button>
        </vb-buttons-list>

        <vb-hero :color="color">
          <vb-container>
            <vb-title>{{ color }} title</vb-title>
            <vb-subtitle>{{ color }} subtitle</vb-subtitle>
          </vb-container>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Gradients">
      <demo :code="code.gradients">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="color in colors"
            :key="color"
            :color="color"
            @click="toggleGradient(color)"
          >
            {{ color }}
          </vb-button>
        </vb-buttons-list>

        <vb-hero :color="colorBold" bold>
          <vb-container>
            <vb-title>{{ colorBold }} bold title</vb-title>
            <vb-subtitle>{{ colorBold }} bold subtitle</vb-subtitle>
          </vb-container>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo :code="code.sizes.medium">
        <vb-hero color="primary" size="medium">
          <vb-container>
            <vb-title>Medium bold title</vb-title>
            <vb-subtitle>Medium bold subtitle</vb-subtitle>
          </vb-container>
        </vb-hero>
      </demo>

      <demo :code="code.sizes.large">
        <vb-hero color="info" size="large">
          <vb-container>
            <vb-title>Large bold title</vb-title>
            <vb-subtitle>Large bold subtitle</vb-subtitle>
          </vb-container>
        </vb-hero>
      </demo>

      <demo :code="code.sizes.fullheight">
        <vb-hero color="success" size="fullheight">
          <vb-container>
            <vb-title>Fullheight bold title</vb-title>
            <vb-subtitle>Fullheight bold subtitle</vb-subtitle>
          </vb-container>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Fullheight with navbar">
      <demo :code="code.fullheightNavbar">
        <vb-hero color="info" size="fullheight-with-navbar">
          <vb-container>
            <vb-title>Fullheight hero with navbar</vb-title>
            <vb-subtitle>Fullheight hero with navbar</vb-subtitle>
          </vb-container>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Fullheight hero in 3 parts">
      <vb-content>
        <p>
          To obtain a hero that will cover the whole height of the viewport, you
          can split it in <strong>3 vertical parts</strong>
        </p>
      </vb-content>

      <demo :code="code.fullheightHero.medium">
        <vb-hero color="primary" size="medium" align="centered">
          <vb-container>
            <vb-title>Title</vb-title>
            <vb-subtitle>Subtitle</vb-subtitle>
          </vb-container>

          <vb-navbar slot="head">
            <vb-navbar-item slot="brand" name="logo">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </vb-navbar-item>

            <template slot="right">
              <vb-navbar-item name="Home">Home</vb-navbar-item>
              <vb-navbar-item name="Examples">Examples</vb-navbar-item>
              <vb-navbar-item name="Documentation"
                >Documentation</vb-navbar-item
              >
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

          <vb-tabs slot="foot" type="boxed" fullwidth>
            <vb-tab-item label="Overview"></vb-tab-item>
            <vb-tab-item label="Modifiers"></vb-tab-item>
            <vb-tab-item label="Grid"></vb-tab-item>
            <vb-tab-item label="Elements"></vb-tab-item>
            <vb-tab-item label="Components"></vb-tab-item>
            <vb-tab-item label="Layout"></vb-tab-item>
          </vb-tabs>
        </vb-hero>
      </demo>

      <demo :code="code.fullheightHero.large">
        <vb-hero color="info" size="large" align="centered">
          <vb-container>
            <vb-title>Title</vb-title>
            <vb-subtitle>Subtitle</vb-subtitle>
          </vb-container>

          <vb-navbar slot="head">
            <vb-navbar-item slot="brand" name="logo">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </vb-navbar-item>

            <template slot="right">
              <vb-navbar-item name="Home">Home</vb-navbar-item>
              <vb-navbar-item name="Examples">Examples</vb-navbar-item>
              <vb-navbar-item name="Documentation">
                Documentation
              </vb-navbar-item>
              <vb-navbar-item>
                <vb-button color="info" inverted>
                  <vb-icon name="fa fa-github"></vb-icon>
                  <span>Download</span>
                </vb-button>
              </vb-navbar-item>
            </template>
          </vb-navbar>

          <vb-tabs slot="foot" type="boxed" fullwidth>
            <vb-tab-item label="Overview"></vb-tab-item>
            <vb-tab-item label="Modifiers"></vb-tab-item>
            <vb-tab-item label="Grid"></vb-tab-item>
            <vb-tab-item label="Elements"></vb-tab-item>
            <vb-tab-item label="Components"></vb-tab-item>
            <vb-tab-item label="Layout"></vb-tab-item>
          </vb-tabs>
        </vb-hero>
      </demo>

      <demo :code="code.fullheightHero.fullheight">
        <vb-hero color="success" size="fullheight" align="centered">
          <vb-container>
            <vb-title>Title</vb-title>
            <vb-subtitle>Subtitle</vb-subtitle>
          </vb-container>

          <vb-navbar slot="head">
            <vb-navbar-item slot="brand" name="logo">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </vb-navbar-item>

            <template slot="right">
              <vb-navbar-item name="Home">Home</vb-navbar-item>
              <vb-navbar-item name="Examples">Examples</vb-navbar-item>
              <vb-navbar-item name="Documentation">
                Documentation
              </vb-navbar-item>
              <vb-navbar-item>
                <vb-button color="success" inverted>
                  <vb-icon name="fa fa-github"></vb-icon>
                  <span>Download</span>
                </vb-button>
              </vb-navbar-item>
            </template>
          </vb-navbar>

          <vb-tabs slot="foot" type="boxed" fullwidth>
            <vb-tab-item label="Overview"></vb-tab-item>
            <vb-tab-item label="Modifiers"></vb-tab-item>
            <vb-tab-item label="Grid"></vb-tab-item>
            <vb-tab-item label="Elements"></vb-tab-item>
            <vb-tab-item label="Components"></vb-tab-item>
            <vb-tab-item label="Layout"></vb-tab-item>
          </vb-tabs>
        </vb-hero>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/layout/hero.js'

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
  name: 'HeroExamples',
  data() {
    return {
      code,
      colors: HERO_COLORS,
      color: 'primary',
      colorBold: 'primary'
    }
  },
  methods: {
    toggleColors(color) {
      this.color = color
    },
    toggleGradient(color) {
      this.colorBold = color
    }
  }
}
</script>

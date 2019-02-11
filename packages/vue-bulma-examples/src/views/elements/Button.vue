<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-button>Button</vb-button>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo :code="code.colors">
        <vb-buttons-list>
          <vb-button color="primary">Primary</vb-button>
          <vb-button color="link">Link</vb-button>
          <vb-button color="info">Info</vb-button>
          <vb-button color="success">Success</vb-button>
          <vb-button color="warning">Warning</vb-button>
          <vb-button color="danger">Danger</vb-button>
          <vb-button color="white">White</vb-button>
          <vb-button color="light">Light</vb-button>
          <vb-button color="dark">Dark</vb-button>
          <vb-button color="black">Black</vb-button>
          <vb-button color="text">Text</vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <vb-content>The button comes in 4 different sizes:</vb-content>
      <demo :code="code.size">
        <vb-buttons-list>
          <vb-button size="small">Small</vb-button>
          <vb-button>Default</vb-button>
          <vb-button size="medium">Medium</vb-button>
          <vb-button size="large">Large</vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Displays">
      <demo :code="code.displays">
        <vb-button fullwidth>Fullwidth</vb-button>
      </demo>
    </example-section-item>

    <example-section-item title="Styles">
      <vb-content>Outlined</vb-content>
      <demo :code="code.outlined">
        <vb-buttons-list>
          <vb-button outlined>Outlined</vb-button>
          <vb-button color="primary" outlined>Outlined</vb-button>
          <vb-button color="link" outlined>Outlined</vb-button>
          <vb-button color="info" outlined>Outlined</vb-button>
          <vb-button color="warning" outlined>Outlined</vb-button>
          <vb-button color="success" outlined>Outlined</vb-button>
          <vb-button color="danger" outlined>Outlined</vb-button>
        </vb-buttons-list>
      </demo>
      <vb-content>Inverted</vb-content>
      <demo class="button-invert" :code="code.invert">
        <vb-buttons-list>
          <vb-button color="primary" inverted>Invert</vb-button>
          <vb-button color="link" inverted>Invert</vb-button>
          <vb-button color="info" inverted>Invert</vb-button>
          <vb-button color="success" inverted>Invert</vb-button>
          <vb-button color="danger" inverted>Invert</vb-button>
        </vb-buttons-list>
      </demo>
      <vb-content>Outlined and Inverted</vb-content>
      <demo class="button-invert" :code="code.invertedOutlined">
        <vb-buttons-list>
          <vb-button color="primary" inverted outlined
            >Invert Outlined</vb-button
          >
          <vb-button color="link" inverted outlined>Invert Outlined</vb-button>
          <vb-button color="info" inverted outlined>Invert Outlined</vb-button>
          <vb-button color="success" inverted outlined
            >Invert Outlined</vb-button
          >
          <vb-button color="danger" inverted outlined
            >Invert Outlined</vb-button
          >
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo :code="code.rounded">
        <vb-buttons-list>
          <vb-button rounded>Outlined</vb-button>
          <vb-button color="primary" rounded>Rounded</vb-button>
          <vb-button color="link" rounded>Rounded</vb-button>
          <vb-button color="info" rounded>Rounded</vb-button>
          <vb-button color="success" rounded>Rounded</vb-button>
          <vb-button color="danger" rounded>Rounded</vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="States">
      <demo :code="code.states">
        <vb-buttons-list>
          <vb-button state="hovered">Hover</vb-button>
          <vb-button state="focused">Focus</vb-button>
          <vb-button state="active">Active</vb-button>
          <vb-button state="loading">Loading</vb-button>
          <vb-button state="static">Static</vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Disabled">
      <demo :code="code.disabled">
        <vb-buttons-list>
          <vb-button disabled>Disable</vb-button>
          <vb-button color="primary" disabled>Disable</vb-button>
          <vb-button color="link" disabled>Disable</vb-button>
          <vb-button color="info" disabled>Disable</vb-button>
          <vb-button color="success" disabled>Disable</vb-button>
          <vb-button color="danger" disabled>Disable</vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Icons">
      <vb-content>With Font Awesome icons</vb-content>
      <demo :code="code.icons">
        <vb-buttons-list>
          <vb-button>
            <vb-icon name="fa fa-bold"></vb-icon>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-italic"></vb-icon>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-underline"></vb-icon>
          </vb-button>
          <vb-button color="primary">
            <vb-icon name="fa fa-twitter"></vb-icon>
            <span>Twitter</span>
          </vb-button>
          <vb-button color="success">
            <vb-icon name="fa fa-check"></vb-icon>
            <span>Save</span>
          </vb-button>
          <vb-button color="danger" outlined>
            <span>Delete</span>
            <vb-icon name="fa fa-times"></vb-icon>
          </vb-button>
          <vb-button size="small">
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
          <vb-button size="medium">
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
          <vb-button size="large">
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button size="small">
            <vb-icon name="fa fa-header"></vb-icon>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button>
            <vb-icon name="fa fa-header" size="small"></vb-icon>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-header fa-lg"></vb-icon>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button size="medium">
            <vb-icon name="fa fa-header" size="small"></vb-icon>
          </vb-button>
          <vb-button size="medium">
            <vb-icon name="fa fa-header fa-lg"></vb-icon>
          </vb-button>
          <vb-button size="medium">
            <vb-icon name="fa fa-header fa-2x"></vb-icon>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button size="large">
            <vb-icon name="fa fa-header" size="small"></vb-icon>
          </vb-button>
          <vb-button size="large">
            <vb-icon name="fa fa-header fa-lg"></vb-icon>
          </vb-button>
          <vb-button size="large">
            <vb-icon name="fa fa-header fa-2x" size="medium"></vb-icon>
          </vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Button Group">
      <vb-content
        >If you want to group buttons together on a single line</vb-content
      >

      <demo :code="code.group">
        <vb-button-group>
          <vb-button color="primary">Save</vb-button>
          <vb-button>Cancel</vb-button>
          <vb-button color="danger">Delete</vb-button>
        </vb-button-group>
      </demo>
    </example-section-item>

    <example-section-item title="Button Addons">
      <vb-content>If you want to use buttons as addons</vb-content>
      <demo :code="code.addons">
        <vb-button-addons>
          <vb-button>
            <vb-icon name="fa fa-align-left"></vb-icon>
            <span>left</span>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-align-center"></vb-icon>
            <span>center</span>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-align-right"></vb-icon>
            <span>right</span>
          </vb-button>
        </vb-button-addons>
      </demo>
    </example-section-item>

    <example-section-item title="Button List">
      <vb-content>
        You can now create a list of buttons with the
        <code>vb-buttons-list</code> container
      </vb-content>

      <demo :code="code.list">
        <vb-buttons-list>
          <vb-button>Save changes</vb-button>
          <vb-button>Save and continue</vb-button>
          <vb-button>Cancel</vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Button List addons">
      <vb-content>
        <p>
          You can attach <code>vb-button</code> together with the
          <code>addons</code> modifier.
        </p>
        <p>
          Use the <code>align="centered"</code> or the
          <code>align="right"</code> modifiers to alter the alignment.
        </p>
      </vb-content>
      <demo :code="code.listAddonsLeft">
        <vb-buttons-list addons>
          <vb-button color="success">Save changes</vb-button>
          <vb-button>Save and continue</vb-button>
          <vb-button>Cancel</vb-button>
        </vb-buttons-list>
      </demo>
      <demo :code="code.listAddonsCentered">
        <vb-buttons-list addons align="centered">
          <vb-button>Save changes</vb-button>
          <vb-button color="info">Save and continue</vb-button>
          <vb-button>Cancel</vb-button>
        </vb-buttons-list>
      </demo>
      <demo :code="code.listAddonsRight">
        <vb-buttons-list addons align="right">
          <vb-button>Save changes</vb-button>
          <vb-button>Save and continue</vb-button>
          <vb-button color="danger">Cancel</vb-button>
        </vb-buttons-list>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/elements/button.js'

export default {
  name: 'ButtonExamples',
  data() {
    return {
      code
    }
  }
}
</script>

<style lang="scss" scoped>
.button-invert {
  background-color: #00d1b2;
}
</style>
